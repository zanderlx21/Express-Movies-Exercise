import express from "express";
import Movie from "./Movie";

const routes = express.Router();

const MoviesArray: Movie[] = [
    { id: 1, title: "Jumanji", year: 1995, animated: false },
    { id: 2, title: "FifthElement", year: 1997, animated: false },
    { id: 3, title: "Back to the Future", year: 1985, animated: false },
    { id: 4, title: "Inception", year: 2010, animated: false },
]

routes.get("/", (req, res) => {
    let movieMax = Number.parseInt(req.query.maxYear as string);
    let movieMin = Number.parseInt(req.query.minYear as string);
    if (movieMax && movieMin) {
        let found:Movie[] = [];
        for (let i = 0; i > MoviesArray.length; i++) {
            if(MoviesArray[i].year > movieMin && MoviesArray[i].year < movieMax){
                found.push(MoviesArray[i]);
            }
        }
        res.json(found);
    } else {
        res.json(MoviesArray);
    }
})

routes.get("/:movie-id", function (req, res) {
    for (let i = 0; i < MoviesArray.length; i++) {
      let movieID: number = Number.parseInt(req.params.id);
      //find Movie by id property
      if (MoviesArray[i].id === movieID) {
        //return the json response with the Movie object
        res.json(MoviesArray[i]);
        break;
      }
    }
    res.status(404);
    res.send({ error: "Movies with id 1 does not exist" });
  });

export default routes;