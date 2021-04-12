const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then((data) => {
            console.log(data);
            res.json(data)
        })
})
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ day: -1 }).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;