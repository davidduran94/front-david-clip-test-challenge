import config from "../app/config";

export default function getClients(callback) {
  return fetch(`${config.API_URL}/customers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (callback) return callback(response);
      return response;
    })
    .catch((err) => {
      if (callback) return callback(err);
      return err;
    });
}
