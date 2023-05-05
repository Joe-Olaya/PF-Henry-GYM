import "./CardProducts.css";

const CardProducts = (props) => {
    return(
        <div className="cardPrd">
            <img className="productImg" src={props.imagen_url}/>
            <div className="infoPrd">
            <h1 className="titlePrd">
            <p>{props.name}</p>
            </h1>
            <div className="descriptionPrd">
                <h1>Description: {props.descripcion}</h1>
                <h1>Price: {props.precio}</h1>
            </div>

            </div>
        </div>
    )
}

export default CardProducts;