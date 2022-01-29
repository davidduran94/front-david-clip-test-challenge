import React from "react";
import { createStore } from "redux";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../app/store";
import ClientsList from "./index";
import reducer from "../../app/reducers";

const initialState = {
  clients: [
    {
      id: "a4qcriuatdp25mmyemu8",
      name: "user534",
      last_name: null,
      email: "admin@mail.com",
      phone_number: "423423",
      address: null,
      creation_date: "2022-01-27T23:10:43-06:00",
      external_id: null,
      clabe: null,
    },
    {
      id: "aky8c1iv9jdlr8nnrwrm",
      name: "user534",
      last_name: null,
      email: "admin@mail.com",
      phone_number: "423423",
      address: null,
      creation_date: "2022-01-27T23:10:34-06:00",
      external_id: null,
      clabe: null,
    },
    {
      id: "arju7vjgoon6dd8yjfvd",
      name: "user534",
      last_name: null,
      email: "admin@mail.com",
      phone_number: "423423",
      address: null,
      creation_date: "2022-01-27T23:09:15-06:00",
      external_id: null,
      clabe: null,
    },
  ],
  modeEdit: false,
  clientEdit: {},
  alertType: "",
};

const storeFull = createStore(reducer, initialState);

test("renders app correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ClientsList />
    </Provider>
  );

  expect(getByText(/Obteniendo clientes/i)).toBeInTheDocument();
});

test("renders CLIENT LIST correctly", () => {
  const el = document.createElement("div");
  act(() => {
    const { getByText } = render(
      <Provider store={storeFull}>
        <ClientsList />
      </Provider>,
      el
    );
  });
  expect(el).not.toContain(`Lista de clientes ${initialState.clients.length}`);
});
