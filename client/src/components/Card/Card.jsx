const Card = (props) => {
    return(
        <div>
            <p>Name: {props.nombre}</p> // por el momento solo muestra el nombre
            <p>Id: {props.id}</p> // este muestra el id
        </div>
    )
}

export default Card;