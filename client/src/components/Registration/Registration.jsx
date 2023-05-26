import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { postRegister } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  //const [isRegistering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const [formularioEnviado, cambiarFormularioenviado] = useState(false);
  const navigate = useNavigate();

  // FILTRO EL EMAIL QUE ME TRAE EL LOCALSTORAGE
  const userEmail = JSON.parse(localStorage.getItem("userData"));
  const userFilEmail = userEmail.email;

  return (
    <div className="contRegis">
      <div className="background"></div>
      <div className="formContainer">
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
            if (!valores.name) {
              errors.name = "Please, insert a name";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.name)) {
              errors.name =
                "The name can only have letters and spaces and length less than 20";
            }
            return errors;
          }}
          onSubmit={async (valores, { resetForm }) => {
            resetForm();
            console.log("FORM SENT");
            const user = await dispatch(postRegister(valores));
            localStorage.setItem("userData", JSON.stringify(user.data));
            cambiarFormularioenviado(true);
            setTimeout(() => cambiarFormularioenviado(false), 5000);
            window.location.href =
              "http://localhost:3000/home";
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
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Register</p>
              <p className="message">
                Signup now and get full access to our app.
              </p>

              <label>
                <input
                  required=""
                  value={userFilEmail}
                  readOnly
                  type="email"
                  className="input"
                />
              </label>

              <div className="flex">
                <label>
                  <input
                    placeholder=""
                    type="text"
                    className="input"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>Full Name</span>
                </label>

                <label>
                  <input
                    required=""
                    placeholder=""
                    className="input"
                    type="text"
                    id="dni"
                    name="dni"
                    value={values.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>D.N.I.</span>
                </label>
              </div>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>Phone</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>Address</span>
              </label>

              <button className="submit">Submit</button>
              {formularioEnviado && (
                <p className="successMessage">Formulario enviado con éxito</p>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
