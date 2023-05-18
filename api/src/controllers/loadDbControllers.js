const axios = require("axios");
const { Exercise, Bodypart, Muscle } = require("../db");
const fs = require('fs/promises')
const path = require('path');

const readJson = async () =>{
  return new Promise(async (resolve,reject) => {
    try {
      const pathJson = path.join(__dirname, '../exercisesData.json');
      const data = await fs.readFile(pathJson, 'utf-8');
      const cargarDb = await getAndLoadDbExercises(data)
      resolve(cargarDb)
    } catch (error) {
      reject(error)
    }
  });

}

const getAndLoadDbExercises = async (data) => {
  try {
    const obj = JSON.parse(data)
    for (const elemnt of obj){
      Exercise.findOrCreate({
        where: {
          id: elemnt.id,
        },
        defaults: {
          body_part: elemnt.bodyPart,
          equipment: elemnt.equipment,
          gif_url: elemnt.gifUrl,
          name: elemnt.name,
          muscle_target: elemnt.target,
        },
      })
    }
    
    return "Exercises loaded correctly";
  } catch (error) {
    return error;
  }
};

const getAndLoadDbBodyParts = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "bf730ac0f4msh44114018a91bcb5p103951jsn14fd519029dc",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    response.data.map((e) =>
      Bodypart.findOrCreate({
        where: {
          name: e,
        },
      })
    );
    return "Body parts loaded correctly";
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAndLoadDbMuscle = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/targetList",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "bf730ac0f4msh44114018a91bcb5p103951jsn14fd519029dc",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    response.data.map((e) =>
      Muscle.findOrCreate({
        where: {
          name: e,
        },
      })
    );
    return "Muscles loaded correctly";
  } catch (error) {
    console.log(error);
    return error;
  }
};
  // readJson();
  //console.log(getAndLoadDbMuscle())
  //console.log(getAndLoadDbExercises());
  //console.log(getAndLoadDbBodyParts())

module.exports = {
  getAndLoadDbExercises,
  getAndLoadDbBodyParts,
  getAndLoadDbMuscle,
  readJson,
};
