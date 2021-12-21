import express from "express";
import routes from "./routes/Movie-Routes";

const app = express();

const port = 3003;

app.use(express.json());
app.use("/api/movies", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
