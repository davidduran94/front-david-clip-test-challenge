import getClients from "../getClients";

describe("get client service", () => {
  it("should call fetch and get a response", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    const callback = jest.fn();
    getClients("1", callback);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should call callback and get a response", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: "azivoo2qvebie1zbjnp2",
              name: "saS",
              last_name: null,
              email: "admin@mail.com",
              phone_number: "23423423",
              address: null,
              creation_date: "2022-01-29T10:49:44-06:00",
              external_id: null,
              clabe: null,
            },
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
          ]),
      })
    );
    const callback = jest.fn((response) => response);
    const response = await getClients(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(response).toHaveLength(4);
  });
});
