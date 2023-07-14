import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test("renders learn react link", () => {
  const fakeData = [
    { id: 1, title: "Title 1", body: "Body 1" },
    { id: 2, title: "Title 2", body: "Body 2" },
  ];
  const store = mockStore({
    data: fakeData,
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Data from API")).toBeInTheDocument();

  expect(screen.getByText(fakeData[0].title)).toBeInTheDocument();
  expect(screen.getByText(fakeData[0].body)).toBeInTheDocument();

  expect(screen.getByText(fakeData[1].title)).toBeInTheDocument();
  expect(screen.getByText(fakeData[1].body)).toBeInTheDocument();
});
