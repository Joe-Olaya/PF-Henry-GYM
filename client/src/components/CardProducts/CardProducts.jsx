import "./CardProducts.css";

const CardProducts = (props) => {

    return(
        <div className="cardPrd">
                <img className="productImg" src={props.image}/>
            <div className="infoPrd">
            <h1 className="titlePrd">
            <p>{props.name}</p>
            </h1>
            <div className="descriptionPrd">
                <h1>Description: {props.description}</h1>
                <h1>Price: {props.price}</h1>
            </div>
            </div>
        </div>
    )
}

export default CardProducts;