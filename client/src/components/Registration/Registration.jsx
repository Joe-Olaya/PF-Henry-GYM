import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {Formik} from "formik"
import { postRegister } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Registration =()=>{
  //const [isRegistering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const [formularioEnviado,cambiarFormularioenviado] = useState (false)
  

return (
  <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl  border-gray-100">
  <h1 className="text-5xl font-semibold mt-20  text-yellow-500">REGISTRATION</h1>
  <Formik 
  initialValues={{
    name:'',
    lastname:'',
    email:'',
    phone: '',
    dni:'',
    address:'',
    password:'',

  }
  }
  validate={(valores)=>{
let errors={};

// VALIDACION NOMBRE 
if(!valores.name){
  errors.name= 'por favor ingresa un nombre'
} else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.name)){
  errors.name ='El nombre solo puede tener letras y espacios '

}
if(!valores.email){
  errors.email= 'porfavor ingresa un email'
} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
  errors.email ='El correo solo puede terner lestra,punto, numero y guion bajo'

}
if (!valores.password) {
  errors.password = 'Ingrese una contraseña.';
} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(valores.password)) {
  errors.password = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.';
}

 return errors



  }}
  onSubmit={(valores, {resetForm})=>{
    resetForm();
    console.log('FORMULARIO ENVIADO')
    //console.log(valores)
    dispatch(postRegister(valores));
    cambiarFormularioenviado(true)
    setTimeout(()=>cambiarFormularioenviado(false),5000)

  }} 

  >
    {({values,errors,handleSubmit,touched,handleChange,handleBlur})=>(
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="text-lg font-medium text-slate-50">
        <label  htmlFor="name">Name & Last Name </label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
        type="text" 
        id="name" 
        name="name" 
        placeholder="name" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur} 
        />
        {touched.name && errors.name && <did className='error'>{errors.name}</did>}
      </div>
      <div className="text-lg font-medium  text-slate-50">
        <label htmlFor="dni"> Number DNI </label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
        type="number" 
        id="dni" 
        name="dni" 
        placeholder="number dni " 
        value={values.dni}
        onChange={handleChange}
        onBlur={handleBlur}
        
        
        />
      </div>
      <div className="text-lg font-medium  text-slate-50">
        <label htmlFor="email">Email</label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900" 
        type="email" 
        id="email" 
        name="email" 
        placeholder="email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
        {touched.email && errors.email && <did className='error'>{errors.email}</did>}
      </div >
      <div className="text-lg font-medium  text-slate-50">
        <label htmlFor="phone">Phone</label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
        type="tel" 
        id="phone" 
        name="phone" 
        placeholder="phone" 
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
      </div>
      <div className="text-lg font-medium  text-slate-50">
        <label htmlFor="address">address</label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
        type="text" 
        id="address" 
        name="address" 
        placeholder="address" 
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
      </div>
      <div className="text-lg font-medium  text-slate-50">
        <label htmlFor="password">Password</label>
        <input className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && <did className='error'>{errors.password}</did>}
      </div>
      
      <div className="mt-8 flex justify-between items-center  text-slate-50">
         <div className="font-medium text-base">
           <input type="checkbox"/>
           <label className="ml-2 font-medium text-base">Remenber for 30 day</label>

         </div>
      <button className="font-medium text-base text-yellow-500" type="submit"> Forgot password</button>

      </div>
      <div className=" mt-8 flex flex-col gap-y-4">
        <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-yellow-500 text-white text-lg font-bold">Sing in </button>
      {formularioEnviado && <p className="exito flex justify-between items-center  font-medium text-base text-yellow-500"> Formulario enviado con exito </p>}
        <button 
                        className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
                            Sign in with Google
                    </button>
      </div>
      <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <Link to="/">
                    <button 
                       
                        className='ml-2 font-medium text-base text-yellow-500'>Sign up</button></Link>
                </div>
    </form>
    )}
    </Formik>
  </div>
);

}
export default Registration;