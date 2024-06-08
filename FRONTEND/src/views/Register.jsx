import React, { useState } from "react";
import axios from "axios";
import { ENDPOINT } from "../config/constans";

const Registro = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
    lenguaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(ENDPOINT.registro, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Usuario registrado con éxito");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Error al registrar el usuario: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1 className="mb-4">Registrar nuevo usuario</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Rol</label>
        <select
          id="role"
          name="role"
          value={user.role}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option disabled>Seleccione un rol</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="lenguaje" className="form-label">Lenguaje</label>
        <select
          id="lenguaje"
          name="lenguaje"
          value={user.lenguaje}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option disabled>Seleccione un Lenguaje</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Registrarme</button>
    </form>
  );
};

export default Registro;
