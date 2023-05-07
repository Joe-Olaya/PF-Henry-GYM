import { useSelector } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
import "./CardsContainerPds.css"

const CardsContainerPds = ({ start, end }) => {

  const products = useSelector((state) => state.products);


    return(
        <div className="product">
            {products.slice(start, end).map((product) => {
                return (
                    <div className="product" key={product.id}>
                        <div className="cardProduct">
                            <CardProducts
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsContainerPds;