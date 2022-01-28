import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Register from "../../components/Register";
import Header from "../Header";
import ClientsList from "../../components/ClientsList";
import postClient from "../../services/postClient";
import { newClient, changeAlert } from "../../app/actions";
import AlertStatus from "../../components/AlertStatus";
/**
 *
 * @param {*} props
 * @returns
 */
const Layout = (props) => {
  const dispatcher = useDispatch();
  const alertType = useSelector((state) => state.alertType);
  const [loading, setIsloading] = useState(false);

  /**
   * Generates a request to customer service and dispatchs the client to state
   * Parameters email and name are required, phone is optional
   *  */
  const handleNewClientRequest = async ({ email, name, phone }) => {
    setIsloading(true);
    postClient({ email, name, phone }, (res) => {
      if (res.error) {
        setIsloading(false);
        alert("No se pudo generar el cliente, intente más tarde");
      } else {
        setIsloading(false);
        dispatcher(newClient({ ...res }));
        dispatcher(changeAlert("success"));
      }
    });
  };

  return (
    <>
      <Header />

      <Register loading={loading} onSubmitData={handleNewClientRequest} />
      <AlertStatus type={alertType} />
      <ClientsList />
    </>
  );
};

export default Layout;
