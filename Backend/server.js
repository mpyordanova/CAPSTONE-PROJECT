const express= require ('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const cors= require ('cors');

const postRoutes= require('./routes/posts.js');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// starting path. Every route will start with/posts
app.use('/posts', postRoutes);
 
const MONGO_URL = 'mongodb+srv://Travelbook:Travelbook1@cluster0.zljyapm.mongodb.net/?retryWrites=true&w=majority+srv://travelbook:travel123@cluster0.zljyapm.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);