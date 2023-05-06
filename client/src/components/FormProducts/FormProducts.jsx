import React, { useState } from 'react';
import axios from 'axios';

const FormProducts = () => {
 const [image,setImage]=useState('')
 const [input, setInput]=useState({name:'', description:'', price:0, image:''})

  const setFile = (file) => {
    //funcion que convierte la imagen en datos legibles
    const filereader = new FileReader(); //metodo que convierte en codigo base 64
    filereader.readAsDataURL(file); //leemos la data que devuelve
    filereader.onload = () => {
      //le decimos que hacer
      setInput({
        ...input, 
         image:filereader.result
       })
    };
  };

  const handleSubmit= async() => {
    const postRequest = await axios.post('http://localhost:3001/products', input);
          console.log(postRequest.data)
          setImage(postRequest.data.image)
  };

  const handleOnChange = (e) => {
        e.preventDefault();
     setInput({
      ...input, 
       [e.target.name]:e.target.value
     })   
     
  }


  const handleImage = (e) => {
    const file = e.target.files[0]; ///accedemos a la imagen/video que vamos a subir
    file.type.includes("video") || file.type.includes("image") ///si recibimos videos o imagenes haremos la subida en el input file
      ? setFile(file)
      : alert("Archivo no valido"); ///si no lanzo una alerta de que el archivo no es valido(probado que funciona con un archivo zip,rar)
    //aunque tambien se podria implementar
  };
  return (

    <div> 
      <form action="" style={{margin:'0 auto'}}>
       <label> product Name: </label>
       <input type="text" name="name" value={input.name} onChange={handleOnChange} />

       <label> product description </label>
       <input type="text" name="description" value={input.description} onChange={handleOnChange} />

       <label> product price </label>
       <input type="number" name="price" value={input.price} onChange={handleOnChange}/>

       <label> Image </label>
       <input type="file" onChange={handleImage}/>


       <button onClick={handleSubmit} type='button'> submit </button>
      </form>

      <img src={image} weight="200" height={200} />

    </div>
    
  )
}

export default FormProducts;