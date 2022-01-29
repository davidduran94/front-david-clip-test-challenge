import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

test("renders app correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/OpenPay/i)).toBeInTheDocument();
});

test("show loading message on start", () => {
  act(() => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const sendBtn = getByText(/Registrar Cliente/i);
    userEvent.click(sendBtn);
    expect(getByText(/Obteniendo clientes/i)).toBeInTheDocument();
  });
});

test("show errors on click register without data", () => {
  const el = document.createElement("div");
  act(() => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
      el
    );
    const sendBtn = getByText(/Registrar Cliente/i);
    console.log("sendBtn");
    userEvent.click(sendBtn);
  });
  expect(el).not.toContain("Por favor ingresa un nombre");
});
