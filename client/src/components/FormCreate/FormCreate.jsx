import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProductCreate } from "../../redux/actions";

const FormaCreate = () => {
  //const [isRegistering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const [productCreate, changeProductCreate] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" flex w-full h-screen ">
   <div className=" w-full flex items-center justify-center ">
    <div className="max-w-[800px]  px-10 py-20 ">
      <h1 className="text-5xl font-semibold mt-20  text-yellow-500">
        CREATE PRODUCT
      </h1>
      <Formik
        initialValues={{
          name: "",
          price: "",
          //quantity: "",
          description: "",
          image: "",
        }}
        validate={(valores) => {
          let errors = {};

          // VALIDACION NOMBRE
          if (!valores.name) {
            errors.name = "Please, insert a name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.name)) {
            errors.name =
              "The name can only have letters and spaces and length less than 20"; // ingles
          }
          
          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("FORM SENT");
          //console.log(valores)
        dispatch(postProductCreate(valores));
          //navigate("/");
          changeProductCreate(true);
          setTimeout(() => changeProductCreate(false), 5000);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          touched,
          handleChange,
          handleBlur,
          handleReset
        }) => (
          <form className="mt-8 w-96"  onSubmit={handleSubmit}>
            <div className="text-lg font-medium text-slate-50">
              <label htmlFor="name "> Name  </label>
              <input
                className="w-96 bg-grey-lighter text-2xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} 
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div className=" text-lg font-medium mt-2 text-slate-50">
            <label htmlFor="price"> Price $ </label>
          <input className =" w-96 bg-grey-lighter text-xl text-slate-950 py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold" 
          type="number"  
          name="price"
          placeholder="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
           />
         
         </div>
         {/*<div className=" text-lg font-medium mt-2 text-slate-50">
            <label htmlFor="quantity">Quantity </label>
          <input className ="w-96 bg-grey-lighter text-slate-950 py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold" 
          type="number"  
          name="quantity"
          placeholder="quantity"
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
           />
        
         </div>*/}
            <div className=" text-lg font-medium mt-2 text-slate-50">
            <label htmlFor="image"> Image </label>
          <input className ="w-96 border-gray p-4 bg-grey-lighter  text-slate-950 py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold" 
          type="text"  
          name="image"
          placeholder="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
           />
         
         </div>
         <div className=" text-lg font-medium mt-2 text-slate-50">
            <label htmlFor="description"> Description </label>
          <input className ="w-96 border-gray p-4 bg-grey-lighter  text-slate-950 py-rounded text-grey-darkest border border-grey-lighter rounded-l-none " 
          type="text"  
          name="description"
          placeholder="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
           />
         </div>

         <div className="mt-8 flex justify-between gap-x-4">
  <button className="w-1/3 flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold">
    Create
  </button>
  {productCreate && (
    <p className="flex justify-between items-center font-medium text-base text-yellow-500">
      Product created
    </p>
  )}
  <button  type="button" onClick={() => handleReset()} className="w-1/3 flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-red-600 text-white text-lg font-bold">
    Cancelar
  </button>
  
</div>

           {/* <div className="mt-8 flex justify-between items-center">
        {
              <Link to="/">
                <button className="ml-2  font-medium text-base text-yellow-500">
                  Sign up
                </button>
        </Link>
            </div>*/}
          </form>
        )}
      </Formik>
    </div>
    </div>
    </div>
  );
};
export default FormaCreate  ;


