const axios = require('axios')

const getApiInfo = async () => {

    const infoApi = await axios('https://wger.de/api/v2/exercise/?language=2&is_main=true/')
    const mapInfo = infoApi.data.results.map(i=> {
        let exerciseBase = i.exercise_base;
        let imagenUrl = '';
       
        const imagen = async (exerciseBase) => {
            const img = await axios(`https://wger.de/api/v2/exerciseimage/?exercise_base=${exerciseBase}`)
            imagenUrl += img;
        }
        
        return {
           name : i.name,
           id : i.id,
           description : i.description,
           imagen : imagenUrl ? imagenUrl : "Image not found",

        }
    })
    // const exerciseimage = img.data.results.map(i => {
    //     return {
    //         exerciseBase : i.exercise_base,
    //         imagen: i.image
    //     }
    // })

    //const allInfo = [].concat(mapInfo).concat(exerciseimage)

    return mapInfo
}

module.exports = {
    getApiInfo
}