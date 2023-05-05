import CardProducts from "../CardProducts/CardProducts";
import "./CardsContainerPds.css"

const CardsContainerPds = () => {
    const products = [
        {
          "id": 1,
          "precio": 22,
          "nombre": "Producto 1",
          "descripcion": "e",
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 2,
          "precio": 5,
          "nombre": "Producto 2",
          "descripcion": "d",
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 3,
          "precio": 40,
          "nombre": "Producto 3",
          "descripcion": "c",
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 4,
          "precio": 45,
          "nombre": "Producto 4",
          "descripcion": "b",
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        },
        {
          "id": 5,
          "precio": 10,
          "nombre": "Producto 5",
          "descripcion": "a",
          "imagen_url": "https://www.pngmart.com/files/21/Gym-Silhoutte-PNG-Photo.png"
        }
        
    ]
    return(
        <div className="product">
            {products.map(product => {
                return (
                    <div className="product" key={product.id}>
                        <div className="cardProduct">
                            <CardProducts
                            name={product.nombre}
                            descripcion={product.descripcion}
                            imagen_url={product.imagen_url}
                            precio={product.precio}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsContainerPds;