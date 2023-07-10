import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use (express.json());
app.use (cors());

mongoose.connect(
    "mongodb+srv://aciocan:N1BwzS5m6xBTftXK@project3-recipeapp.ysmq71b.mongodb.net/project3-recipeapp?retryWrites=true&w=majority"
    )

app.listen(3002, () => console.log('Server Working!'));