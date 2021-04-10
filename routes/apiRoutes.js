const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then((data) => {
            console.log(data);
            res.json(data)
        })
})

// router.get("/api/workouts", (req, res) => {
//     db.workout.find({})
//         .populate("workout")
//         .then(dbworkout => {
//             res.json(dbworkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// })






module.exports = router;