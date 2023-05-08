const {
  getAndLoadDbExercises,
  getAndLoadDbBodyParts,
  getAndLoadDbMuscle,
} = require("../controllers/loadDbControllers");

const fullDbData = async (req, res) => {
  try {
    const exercisesData = await getAndLoadDbExercises();
    const bodypartsData = await getAndLoadDbBodyParts();
    const muscleData = await getAndLoadDbMuscle();
    res.status(200).json({
      Exercises: exercisesData,
      Bodyparts: bodypartsData,
      Muscles: muscleData,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  fullDbData,
};
