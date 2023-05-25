const axios = require("axios");
const { Exercise, Bodypart, Muscle, Categoryproduct } = require("../db");
const fs = require('fs/promises')
const path = require('path');
const { Sequelize } = require('sequelize')

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
  // return new Promise(async (resolve, reject) => {
  //   try {
  //     const resultados = [];
  //     for (const elemento of arr) {
  //       let product = await getProductById(elemento.product_id);
  //       let price = product.price * elemento.units;
  //       const resultado = await createNewBody(
  //         price.toFixed(2),
  //         elemento.units,
  //         product.id,
  //         headerId
  //       );
  //       resultados.push(resultado);
  //     }
  //     resolve(resultados);
  //   } catch (error) {
  //     reject(error);
  //   }
  // });
  return new Promise(async (resolve, reject) => {
  try {
    const obj = JSON.parse(data)
    for (const elemnt of obj){
      let muscle = await createMuscle(elemnt.target)
      let muscleId = muscle[0].dataValues.id
      let exercise = await Exercise.findOrCreate({
        where: {
          id: elemnt.id,
        },
        defaults: {
          body_part: elemnt.bodyPart,
          equipment: elemnt.equipment,
          gif_url: elemnt.gifUrl,
          name: elemnt.name,
          muscleId: muscleId
        },
      })
    }  
  } catch (error) {
    console.log(error)
  }
  });
};

const createMuscle = async (data) =>{
  let muscle = await Muscle.findOrCreate({
    where : {
      name : data
    }
  })
  return muscle
}

// const getAndLoadDbBodyParts = async () => {
//   const options = {
//     method: "GET",
//     url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
//     headers: {
//       "content-type": "application/octet-stream",
//       "X-RapidAPI-Key": "bf730ac0f4msh44114018a91bcb5p103951jsn14fd519029dc",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     response.data.map((e) =>
//       Bodypart.findOrCreate({
//         where: {
//           name: e,
//         },
//       })
//     );
//     return "Body parts loaded correctly";
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

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

const createCategoriesProducts = () => {
  try {
      const categories = [
        "Protein",
        "Pre-Workout",
        "Performance",
        "Weight Management",
        "Vitamins & Health",
        "Clothes",
        "Accessories"
      ]
      categories.forEach(async element => {
          const newCategory = await Categoryproduct.create({
              name : element
          })
      });
  } catch (error) {
      return error
  }
}

  // createCategoriesProducts()
  // readJson();
  //console.log(getAndLoadDbMuscle())
  //console.log(getAndLoadDbExercises());
  //console.log(getAndLoadDbBodyParts())

module.exports = {
  getAndLoadDbExercises,
  getAndLoadDbMuscle,
  readJson,
};
