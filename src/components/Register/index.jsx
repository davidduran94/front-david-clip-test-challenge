import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import "./register.css";

const Register = ({ onSubmitData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    //b evt.preventDefault();
    if (!errors.length) {
      console.log("envio::::::", data);
      onSubmitData(data);
    }
  };

  return (
    <>
      <section className="register">
        <section className="container">
          <h2>Registrar Nuevo Cliente</h2>
          <form
            className="register_container_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="label_input">
              {errors.name?.type === "required" && (
                <strong className="error_field">
                  Por favor ingresa un codigo postal válido
                </strong>
              )}
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Nombre del cliente"
                {...register("name", {
                  required: true,
                  maxLength: 30,
                })}
              />
            </label>
            <label className="label_input">
              {errors.email?.type === "required" && (
                <strong className="error_field">
                  Por favor ingresa un email válido
                </strong>
              )}
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </label>

            <label className="label_input">
              {errors.email?.type === "required" && (
                <strong className="error_field">
                  Por favor ingresa un número teléfonico
                </strong>
              )}
              <input
                name="phone"
                className="input"
                type="phone"
                placeholder="Número telefónico"
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                })}
              />
            </label>

            <div className="package_dims">
              <input
                name="zipCode"
                className="input"
                type="number"
                placeholder="Código Postal"
                {...register("length", {
                  required: false,
                  maxLength: 5,
                })}
              />

              <input
                name="state"
                className="input"
                type="text"
                placeholder="Estado"
                {...register("state", {
                  required: false,
                  maxLength: 5,
                })}
              />
              <input
                name="city"
                className="input"
                type="text"
                placeholder="Ciudad"
                {...register("city", {
                  required: false,
                  maxLength: 5,
                })}
              />
              <input
                name="line"
                className="input"
                type="text"
                placeholder="Calle"
                {...register("line", {
                  required: false,
                  maxLength: 50,
                })}
              />
            </div>

            <button type="submit" className="button_send">
              Generar Cliente
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
