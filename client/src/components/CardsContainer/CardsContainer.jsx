import Card from "../Card/Card";

const CardsContainer = () => {
    const exercises = [
        {
          "id": 1,
          "nombre": "Flexiones de brazos",
          "descripcion": "Ejercicio que fortalece los músculos del pecho, tríceps y hombros.",
          "duracion_min": 5,
          "repeticiones": 20,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 2,
          "nombre": "Sentadillas",
          "descripcion": "Ejercicio que fortalece los músculos de las piernas, glúteos y la parte inferior del cuerpo.",
          "duracion_min": 5,
          "repeticiones": 15,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 3,
          "nombre": "Abdominales",
          "descripcion": "Ejercicio que fortalece los músculos abdominales.",
          "duracion_min": 5,
          "repeticiones": 30,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 4,
          "nombre": "Burpees",
          "descripcion": "Ejercicio de cuerpo completo que combina flexiones, saltos y sentadillas.",
          "duracion_min": 10,
          "repeticiones": 10,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 5,
          "nombre": "Plancha",
          "descripcion": "Ejercicio de fortalecimiento del núcleo que implica mantener una posición de tabla.",
          "duracion_min": 3,
          "repeticiones": 1,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 6,
          "nombre": "Flexiones diamante",
          "descripcion": "Variación de las flexiones de brazos que se enfoca en los tríceps.",
          "duracion_min": 5,
          "repeticiones": 15,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 7,
          "nombre": "Zancadas",
          "descripcion": "Ejercicio que fortalece los músculos de las piernas y glúteos.",
          "duracion_min": 5,
          "repeticiones": 10,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 8,
          "nombre": "Flexiones con una mano",
          "descripcion": "Variación de las flexiones de brazos que se enfoca en un solo lado del cuerpo.",
          "duracion_min": 5,
          "repeticiones": 10,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 9,
          "nombre": "Abdominales de bicicleta",
          "descripcion": "Ejercicio que implica moverse",
          "duracion_min": 5,
          "repeticiones": 10,
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        }
    ]; // array de prueba

return(
    <div>
        {exercises.map(exercise => {
            return <Card
            id={exercise.id}
            nombre={exercise.nombre}
            descripcion={exercise.descripcion}
            duracion_min={exercise.duracion_min}
            repeticiones={exercise.repeticiones}
            imagen_url={exercise.imagen_url}
            />
        })}
    </div>
)
}

export default CardsContainer;