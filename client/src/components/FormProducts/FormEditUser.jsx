import React, { useState, useEffect } from "react";
import axios from "axios";
import "../FormProducts/FormProducts.css";

const FormEditUser = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState({
    userType: "",
    address: "",
    phone: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        const userData = response.data;
        setUser(userData);
        setInput({
          userType: userData.userType,
          address: userData.address,
          phone: userData.phone,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async () => {
    const putData = {
      userType: input.userType,
      address: input.address,
      phone: input.phone,
    };

    try {
      const putRequest = await axios.put(`/users/${userId}`, putData);
      console.log(putRequest.data);
      alert("User updated successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to update user");
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <div className="formContainerP">
      <form className="formP" action="">
        <p className="titleP">Edit User</p>{" "}
        <p className="messageP">Update user information</p>
        <label className="flexP">
          <span className="tittleUserType">Type User:</span>
          <select
            name="userType"
            value={input.userType}
            onChange={handleOnChange}
          >
            <option value="Superadmin">Superadmin</option>
            <option value="Client">Client</option>
          </select>
        </label>
        <label>
          <input
            placeholder=""
            className="input"
            type="text"
            name="address"
            value={input.address}
            onChange={handleOnChange}
          />
          <span className="UserEditText">Adress</span>
        </label>
        <label>
          <input
            placeholder=""
            className="input"
            type="text"
            name="phone"
            value={input.phone}
            onChange={handleOnChange}
          />
          <span className="UserEditText">Phone:</span>
        </label>
        <button className="submitP" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEditUser;
