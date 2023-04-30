const {
  searchExerciseByName,
  getAllExercises,
  searchExerciseById,
} = require("../controllers/exercisesControllers");

const getExercisesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchExerciseByName(name)
      : await getAllExercises();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExecercisesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await searchExerciseById(id);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getExercisesHandler,
  getExecercisesByIdHandler,
};
