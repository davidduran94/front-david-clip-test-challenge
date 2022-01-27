import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Register from "../../components/Register";
import Header from "../Header";
import ClientsList from "../../components/ClientsList";
import postClient from "../../services/postClient";
import { newClient } from "../../app/actions";

/**
 *
 * @param {*} props
 * @returns
 */
const Layout = (props) => {
  const dispatcher = useDispatch();
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
      }
    });
  };

  return (
    <>
      <Header />
      <Register loading={loading} onSubmitData={handleNewClientRequest} />
      <ClientsList />
    </>
  );
};

export default Layout;
