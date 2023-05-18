import "./CardProducts.css";
import {Addcart} from '../../redux/actions'
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";

const CardProducts = (props) => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const cart = useSelector ((state) => state.cart)


    const onAddProduct = (id) =>{
       const item = products.filter(i=>i.id===id)
       console.log(item)
    dispatch(Addcart(item[0]))}
           
        
    
    return(

        <div className="cardPrd">
                <img className="productImg" src={props.image}/>
            <div className="infoPrd">
            <h1 className="titlePrd">
            <p>{props.name}</p>
            </h1>
            <div className="descriptionPrd">
                <h1>Description: {props.description}</h1>
                <h1>Price: ${props.price}</h1>
                <h1>stock: {props.stock}</h1>
                <button button onClick={()=> onAddProduct(props.id)} className="w-1/3 flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold" > Add to Cart </button>
              
            </div>
            </div>
            
        </div>
    )
}

export default CardProducts;