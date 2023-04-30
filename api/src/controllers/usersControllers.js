const {User} = require('../db')

const getUserByDNI = async (dni,password) =>{
    const getDbExercises = await User.findOne({
        where : {
            dni:dni
        }
    })
    if(getDbExercises){
        if(getDbExercises.password === password){
            let arrUser = [];
            arrUser.push({
            dni:getDbExercises.dni,
            name:getDbExercises.name,
            email:getDbExercises.email,
            adress:getDbExercises.adress,
        })
            return arrUser
        } else {
            return "Contraseña incorrecta"
        }
    } else {
        return "Usuario inexistente"
    }
}

const createUser = async (dni, password, name, email, adress) => {
    const oldUser = await getUserByDNI(dni)

    if(oldUser === "Usuario inexistente"){
        const newUser = await User.create({ 
            dni: dni,
            password: password,
            name: name,
            email: email,
            adress: adress,
            userType: 'Client' 
        });

        return "Usuario creado exitosamente"
    } else {
        return "El usuario ya existe"
    }

}


module.exports = {
    getUserByDNI,
    createUser
}