import React, { useState } from 'react';
import axios from 'axios';

const FormProducts = () => {
 const [image,setImage]=useState('')
 const [input, setInput]=useState({name:'', description:'', price:0, image:'', stock:0})

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
          if(postRequest.data == "Product created successfully"){
            alert(postRequest.data)
          } else {
            alert(postRequest.data)
          }
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
<div className=" flex w-full h-screen ">
   <div className=" w-full flex items-center justify-center ">
    <div className="max-w-[800px]  px-10 py-20 ">
      <h1 className="text-5xl font-semibold mt-20  text-yellow-500">
        CREATE PRODUCT
      </h1>
      <form className="mt-8 w-96" action="" style={{margin:'0 auto'}}> 
      <div className="text-lg font-medium text-slate-50">
      <label htmlFor="name">Name</label>
       <input   className="w-96 bg-grey-lighter text-2xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
       type="text" name="name" value={input.name} onChange={handleOnChange} />
       </div>
       <div className="text-lg font-medium text-slate-50">
       <label htmlFor="description">Description</label>
       <input   className="w-96 bg-grey-lighter text-2xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
       type="text" name="description" value={input.description} onChange={handleOnChange} />
       </div>

       <div className="text-lg font-medium text-slate-50">
       <label htmlFor="price">Price</label>
       <input   className="w-96 bg-grey-lighter text-2xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
       type="number" name="price" value={input.price} onChange={handleOnChange}/>
       </div>
       <div className=" text-lg font-medium mt-2 text-slate-50">
            <label htmlFor="stock">Stock </label>
          <input className ="w-96 bg-grey-lighter text-slate-950 py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold" 
          type="number"  
          name="stock"
          placeholder="stock"
          onChange={handleOnChange}
           />
        
         </div>
       <div className="text-lg font-medium text-slate-50">
       <label htmlFor="image">Image </label>
       <input  className="w-96 bg-grey-lighter text-2xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
       type="file" onChange={handleImage}/>
       </div>

      <img src={image} weight="200" height={200} />

       <button className="w-1/3 flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold" onClick={handleSubmit} type='button'> Create </button>
    
  
      </form>
      
    </div>
    </div>
    </div>
  )}
export default FormProducts;