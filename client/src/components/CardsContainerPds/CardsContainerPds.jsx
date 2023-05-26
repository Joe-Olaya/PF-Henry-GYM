import { useSelector } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
import "./CardsContainerPds.css";

const CardsContainerPds = ({ start, end }) => {
  const products = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.categoryproductId === selectedCategory.id
      )
    : products;

  return (
    <div className="product">
      {filteredProducts.slice(start, end).map((product) => (
        <div className="product" key={product.id}>
          <div className="cardProduct">
            <CardProducts
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              stock={product.stock}
              categoryproductId={product.categoryproductId}
              average_score={product.average_score}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainerPds;
