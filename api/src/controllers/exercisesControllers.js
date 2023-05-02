const { Exercise } = require("../db");

const searchExerciseByName = async (name) => {
  const getDbExercises = await Exercise.findAll();
  const cleanData = cleanExerciseData(getDbExercises);
  const exerciseFiltered = cleanData.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );
  return exerciseFiltered;
};

const getAllExercises = async () => {
  const getDbExercises = await Exercise.findAll();
  const cleanData = cleanExerciseData(getDbExercises);
  return cleanData;
};

const cleanExerciseData = (arr) => {
  let data = [];
  if (arr.length > 1) {
    arr.map((el) => {
      data.push({
        id: el.id,
        name: el.name,
        gif_url: el.gif_url,
        muscle: el.muscle_target,
        body_part: el.body_part,
      });
    });
  } else {
    data.push({
      id: arr.id,
      name: arr.name,
      gif_url: arr.gif_url,
      muscle: arr.muscle_target,
      body_part: arr.body_part,
    });
  }
  return data;
};

const searchExerciseById = async (id) => {
  const getDbExercises = await Exercise.findByPk(id);

  const cleanData = cleanExerciseData(getDbExercises);
  return cleanData;
};

module.exports = {
  searchExerciseByName,
  getAllExercises,
  searchExerciseById,
};
