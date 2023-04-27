const axios = require('axios')

const getApiInfo = async () => {

    const infoApi = await axios('https://wger.de/api/v2/exercise/?language=2&muscles=1&is_main=true/')
    const img = await axios('https://wger.de/api/v2/exerciseimage/?limit=1000&offset=0')
    const mapInfo = infoApi.data.results.map(i=> {
        return {
           name : i.name,
           id : i.id,
           description : i.description,
           exerciseBase : i.exercise_base,

        }
    })
    const exerciseimage = img.data.results.map(i => {
        return {
            exerciseBase : i.exercise_base,
            imagen: i.image
        }
    })

const allInfo = [].concat(mapInfo).concat(exerciseimage)

    return allInfo
}

module.exports = {
    getApiInfo
}