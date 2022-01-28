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

export const editClient = (payload) => ({
  type: "EDIT_CLIENT",
  payload: payload,
});

export const toggleMode = (payload) => ({
  type: "TOGGLE_MODE",
  payload: payload,
});

export const changeAlert = (payload) => ({
  type: "CHANGE_ALERT",
  payload: payload,
});
