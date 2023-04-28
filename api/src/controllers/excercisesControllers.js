
const {excercise, Muscle_group} = require('../db')

const searchExcerciseByName = async (name) => {
    const getDbExcercise = await excercise.findAll({
        include : [
            {
                model: Muscle_group,
                attributes: ['name'],
                through : {
                    attributes: [],
                }
            },
        ]
    })
    const cleanData = cleanExcerciseData(getDbExcercise);
    const excerciseFiltered = cleanData.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
    return excerciseFiltered
}

const getAllExcercises = async () => {
    const getDbExcercise = await excercise.findAll({
        include : [
            {
                model: Muscle_group,
                attributes: ['name'],
                through : {
                    attributes: [],
                }
            },
        ]
    })
    const cleanData = cleanExcerciseData(getDbExcercise);
    return cleanData;
}

const cleanExcerciseData = (arr)=>{
    let data = [];
    arr.map(el => {
        let muscleGroup = [];
        for (j of el.Muscle_group){
            muscleGroup.push(j.name)
        }
        data.push({
            id: el.id,
            name: el.name,
            image: el.image,
            muscle_group: muscleGroup.toString()
        })
    })
    return data;
}

module.exports= {
    searchExcerciseByName,
    getAllExcercises
}