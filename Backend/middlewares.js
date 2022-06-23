const jwt = require('jwt-simple');
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const User = require('./models/UsersSchema');

const validate = (req, res, next) => {
  console.log('validate')
    if (req.header('JWT-Token')) {
      let decoded = jwt.decode(req.header('JWT-Token'), jwtSecret); 
      if (decoded.username && decoded.password) { 
        User.findOne({ 
          username: decoded.username
        }, (error, foundUser) => {
          console.log(foundUser)

          
          if (error) {
            console.error(error); 
            res.status(404).json({
              error: error
            });
          } else {
            if (decoded.password === foundUser.password) {
              console.log(foundUser)
              req.username = foundUser.username
              req.id = foundUser._id
              next();
            } else{
            
              res.status(403).json({ 
                message: 'Wrong username and password combo'
              });
            }
          }
        });
      } else {
        res.status(403).json({
          message: 'Token not readable'
        });
      }
    } else {
      res.status(403).json({
        message: 'Invalid headers'
      }); 
    }
  }

  const login = (req, res, next) => {
    User.findOne({
      username: req.body.username 
    }, async (error, foundUser) => {
      if (error) {
        console.error(error);
        res.status(400).json({ 
          error: error
        });
      } else if (foundUser === null) {
        res.status(404).json({ 
          error: "not found"
        });
      } else {
        console.log('successfully found user');
        const result = await bcrypt.compare(req.body.password, foundUser.password); 
        console.log(result)
        req.result = result; 
        req.password = foundUser.password;
        req.username=foundUser.username
        next(); 
      }
    });
  }
  
  module.exports = {
    validate,
    login
  }