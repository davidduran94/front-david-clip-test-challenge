import postClient from "../postClient";

describe("post client service", () => {
  it("should call fetch and get a response", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    fetch.mockClear();

    const callback = jest.fn();
    postClient("1", callback);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should call callback and get a response", async () => {
    fetch.mockClear();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            message: "success",
          }),
      })
    );
    fetch.mockClear();

    const callback = jest.fn((response) => response);
    const response = await postClient(
      { id: "1", name: "dasda", email: "asda@mail.com", phone: "23423433" },
      callback
    );
    expect(response.message).toContain("success");
  });
});
