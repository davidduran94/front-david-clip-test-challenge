import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import "./register.css";
import updateClient from "../../services/updateClient";
import {
  newClient,
  deleteClient as deleteClientAction,
  toggleMode,
  editClient,
} from "../../app/actions";

const Register = ({ onSubmitData }) => {
  const dispatcher = useDispatch();
  const modeEdit = useSelector((state) => state.modeEdit);
  const userEdit = useSelector((state) => state.clientEdit);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const cancelEdit = () => {
    dispatcher(toggleMode(false));
    dispatcher(editClient({}));
  };

  const handleEditRequest = (data) => {
    updateClient(data, (res) => {
      if (res.error) {
        alert(res.message);
        return;
      }

      dispatcher(deleteClientAction(data.id));
      dispatcher(newClient(res));
      cancelEdit();
    });
  };

  const onSubmit = (data) => {
    if (!errors.length) {
      modeEdit
        ? handleEditRequest({ ...userEdit, ...data })
        : onSubmitData(data);
    }
  };

  return (
    <>
      <section className="register">
        <section className="container">
          {modeEdit ? (
            <h2>Actualizar Cliente</h2>
          ) : (
            <h2>Registro de nuevos clientes</h2>
          )}
          <form
            className="register_container_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="label_input">
              {errors.name?.type === "required" && (
                <strong className="error_field">
                  Por favor ingresa un nombre
                </strong>
              )}
              <input
                defaultValue={modeEdit ? userEdit?.name : ""}
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
                defaultValue={modeEdit ? userEdit?.email : ""}
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
                defaultValue={modeEdit ? userEdit?.phone_number : ""}
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
            <br />
            {modeEdit ? (
              <>
                <button onClick={cancelEdit} className="button_cancel">
                  Cancelar
                </button>
                <br />
                <button type="submit" className="button_send">
                  Actualizar Cliente
                </button>
              </>
            ) : (
              <button type="submit" className="button_send">
                Registrar Cliente
              </button>
            )}
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
