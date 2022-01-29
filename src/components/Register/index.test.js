import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../app/store";
import Register from "./index";

test("renders app correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  expect(getByText(/Registro de nuevos clientes/i)).toBeInTheDocument();
});

test("show errors on click register without NAME", () => {
  const el = document.createElement("div");
  act(() => {
    const { getByText } = render(
      <Provider store={store}>
        <Register />
      </Provider>,
      el
    );
    const sendBtn = getByText(/Registrar Cliente/i);
    console.log("sendBtn");
    userEvent.click(sendBtn);
  });
  expect(el).not.toContain("Por favor ingresa un nombre");
});

test("show error on EMAIL without data", () => {
  const el = document.createElement("div");
  act(() => {
    const { getByText } = render(
      <Provider store={store}>
        <Register />
      </Provider>,
      el
    );
    const sendBtn = getByText(/Registrar Cliente/i);
    console.log("sendBtn");
    userEvent.click(sendBtn);
  });
  expect(el).not.toContain("Por favor ingresa un email válido");
});

test("show error on EMAIL without data", () => {
  const el = document.createElement("div");
  act(() => {
    const { getByText } = render(
      <Provider store={store}>
        <Register />
      </Provider>,
      el
    );
    const sendBtn = getByText(/Registrar Cliente/i);
    console.log("sendBtn");
    userEvent.click(sendBtn);
  });
  expect(el).not.toContain("Por favor ingresa un número teléfonico");
});
