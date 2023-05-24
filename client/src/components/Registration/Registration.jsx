import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { postRegister } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  //const [isRegistering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const [formularioEnviado, cambiarFormularioenviado] = useState(false);
  const navigate = useNavigate();

  // FILTRO EL EMAIL QUE ME TRAE EL LOCALSTORAGE
  const userEmail =JSON.parse(localStorage.getItem("userData"));
  const userFilEmail = userEmail.email;

  return (
    <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl  border-gray-100">
      <h1 className="text-5xl font-semibold mt-20  text-yellow-500">
        REGISTRATION
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: userFilEmail,
          phone: "",
          dni: "",
          address: "",
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
        onSubmit={ async (valores, { resetForm }) => {
          resetForm();
          console.log("FORM SENT");
          const user = await dispatch(postRegister(valores));
          localStorage.setItem("userData", JSON.stringify(user.data));
          navigate("/home");
          cambiarFormularioenviado(true);
          setTimeout(() => cambiarFormularioenviado(false), 5000);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <form className="mt-8" onSubmit={handleSubmit}>
          <div className="text-lg font-medium  text-slate-50">
          <label htmlFor="email" className="text-yellow-500">E-mail:</label>
          <p className="text-yellow-500">{userFilEmail}</p>
          </div>
            <div className="text-lg font-medium text-slate-50">
              <label htmlFor="name">Name & Last Name </label>
              <input
                className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
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
            <div className="text-lg font-medium  text-slate-50">
              <label htmlFor="dni"> DNI Number </label>
              <input
                className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
                type="number"
                id="dni"
                name="dni"
                placeholder="DNI number "
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="text-lg font-medium  text-slate-50">
              <label htmlFor="phone">Phone</label>
              <input
                className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="text-lg font-medium  text-slate-50">
              <label htmlFor="address">Address</label>
              <input
                className="w-full border-2 border-gray rounded-xl p-4 mt-1  bg-neutral-900"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className=" mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-yellow-500 text-white text-lg font-bold">
                Create User{" "}
              </button>
              {formularioEnviado && (
                <p className="flex justify-between items-center  font-medium text-base text-yellow-500">
                  {" "}
                  Formulario enviado con exito{" "}
                </p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Registration;
