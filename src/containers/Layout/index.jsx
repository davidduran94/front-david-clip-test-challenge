import React, { useState } from "react";
import Register from "../../components/Register";
import Header from "../Header";
import ClientsList from "../../components/ClientsList";
import Client from "../../components/Client";
import getClients from "../../services/getClients";

const Layout = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientsList, setClientsList] = useState([]);

  const handleClientsRequest = async (quoation) => {
    setLoading(true);
    console.log("consutlando API...");
    getClients({}, (res) => {
      setError(false);
      setLoading(false);
      if (!res.error) {
        // console.log(res);
        setClientsList(res);
      } else {
        // setError(res);
        console.log(res);
      }
    });
  };

  return (
    <>
      <Header />
      <Register onSubmitData={handleClientsRequest} />
      {isLoading ? (
        <p>Obteniendo...</p>
      ) : error ? (
        <p>Error al obtener clientes, intente nuevamente</p>
      ) : (
        <ClientsList></ClientsList>
      )}
    </>
  );
};

export default Layout;
