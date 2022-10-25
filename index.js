const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Tech Teaching Club Server Side");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:categorie", (req, res) => {
  const categorie = req.params.categorie;
  const filterCourses = courses.filter(
    (course) => course.categorie === categorie
  );
  res.send(filterCourses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const findCourse = courses.find((course) => course.id === id);
  res.send(findCourse);
});

app.listen(port, () => {
  console.log(`Tech Teaching Club app listening on port ${port}`);
});
