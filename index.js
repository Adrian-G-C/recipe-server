import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const corsOptions = {
    origin: 'https://project3-recipeapp-front-edcfb839000c.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
// app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.listen(PORT, () => console.log('Server Working!'));