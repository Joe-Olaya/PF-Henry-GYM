const {User} = require('../db')

const getUserByDNI = async (dni,password) =>{
    const getDbExercises = await User.findOne({
        where : {
            dni:dni
        }
    })
    if(getDbExercises){
        let arrUser = [];
        arrUser.push({
            dni:getDbExercises.dni,
            name:getDbExercises.name,
            email:getDbExercises.email,
            adress:getDbExercises.adress,
        })
        if(getDbExercises.password === password){
            return arrUser
        } else {
            return "Contraseña incorrecta"
        }
    } else {
        return "Usuario inexistente"
    }
}

module.exports = {
    getUserByDNI
}