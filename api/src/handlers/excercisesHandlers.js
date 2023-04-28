const {searchExcerciseByName, getAllExcercises} = require("../controllers/excercisesControllers")

const getExcercisesHandler = async (req,res) => {
    const {name} = req.query
    try {
        const results = name ? await searchExcerciseByName(name) : await getAllExcercises();
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getExecercisesByIdHandler = async (req,res) => {
    const {id} = req.params
    try {
        const results = await searchExcerciseById(id);
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getExcercisesHandler,
    getExecercisesByIdHandler
}