import express from "express";
import Movie from "./Movie";

const routes = express.Router();

const Movies: Movie[] = [
    { id: 1, title: "Jumanji", year: 1995, animated: false },
    { id: 2, title: "FifthElement", year: 1997, animated: false },
    { id: 3, title: "Back to the Future", year: 1985, animated: false },
    { id: 4, title: "Inception", year: 2010, animated: false },
]

routes.get("/", function (request, response) {
    let minYearParam: string = request.query.minRating as string;
    if (minYearParam) {
    let minYear: number = Number.parseFloat(request.query.minYear as string);
    let filteredMovies: Movie[] = Movies.filter((Movies) => Movies.id >= minYear);
    response.json(filteredMovies);
    } else {
        response.json(Movies);
    }
  });

routes.get("/:movie-id", function (req, res) {
    for (let i = 0; i < Movies.length; i++) {
      let inputId: number = Number.parseInt(req.params.id)
      //find Movie by id property
      if (Movies[i].id === inputId) {
        //return the json response with the Movie object
        res.json(Movies[i]);
        break;
      }
    }
    res.status(404);
    res.send({ error: "Shop not found" });
  });

export default routes;