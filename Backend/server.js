require('dotenv').config();
const express= require ('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const cors= require ('cors');

// import Models
const Post = require('./models/PostSchema');
const User = require('./models/UsersSchema')


const mongoConfig = require('./config');

const seedRouter = require('./routes/seed');
const clearRouter = require('./routes/clear');
const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');

const PORT = process.env.PORT|| 5000;
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors()); //it has to be above app.use( and the routs)
app.use(express.json());


app.use('/seed', seedRouter);
app.use('/clear', clearRouter);
app.use('/posts', postRouter);
app.use('/user', userRouter);


app.get('/',(req, res)=>{
  res.status(200).json({message:"Welcome to your memories!"})
})

app.listen(PORT, ()=>{
  mongoConfig()
  console.log(`Server is listening on port ${PORT}`)
})










// const MONGO_URL = 'mongodb+srv://Travelbook:Travelbook1@cluster0.zljyapm.mongodb.net/?retryWrites=true&w=majority+srv://travelbook:travel123@cluster0.zljyapm.mongodb.net/?retryWrites=true&w=majority';


// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);