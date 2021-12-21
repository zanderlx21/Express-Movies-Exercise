import express from "express";
import Movie from "./Movie";

const routes = express.Router();

const Movies: Movie[] = [
    {id: 1, title: "Jumanji", year: 1995, animated: false},
    {id: 1, title: "FifthElement", year: 1997, animated: false},
    {id: 1, title: "Back to the Future", year: 1985, animated: false},
    {id: 1, title: "Inception", year: 2010, animated: false},
]

routes.get("/", function(req, res){
    res.json("Home");
});

export default routes;