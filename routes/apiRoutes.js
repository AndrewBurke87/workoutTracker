const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(lastWorkout => {
            res.json(lastWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
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
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body + "I am here")
    // console.log(params)
    db.Workout.findOneAndUpdate({ _id: req.params.id },
        {
            $push: { exercises: req.body }
        },
        // { new: true, runValidators: true }
    ).then(dbWorkout => {
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