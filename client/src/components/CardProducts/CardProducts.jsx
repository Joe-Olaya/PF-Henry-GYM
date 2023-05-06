import "./CardProducts.css";

const CardProducts = (props) => {
    return(
        <div className="cardPrd">
            <popup trigger={false}>
                <img className="productImg" src={props.image}/>
                </popup>
            <div className="infoPrd">
            <h1 className="titlePrd">
            <p>Name: {props.name}</p>
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