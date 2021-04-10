const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now

    },
    excercises: [{
        type: {
            type: String,
            required: "Please choose an exercise",
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number,
            required: true,
            trim: true
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
