import React from "react";

export const deleteClient = (payload) => ({
  type: "DELETE_CLIENT",
  payload: payload,
});

export const newClient = (payload) => ({
  type: "NEW_CLIENT",
  payload: payload,
});

export const getClients = (payload) => ({
  type: "GET_CLIENTS",
  payload: payload,
});

export const getClient = (payload) => ({
  type: "GET_CLIENT",
  payload: payload,
});
