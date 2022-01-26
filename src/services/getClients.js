import config from "../app/config";

export default function getClients({ name, email }, callback) {
  return fetch(`${config.API_URL}/v1/`, {
    method: "POST",
    headers: {
      // Authorization: `Token ${config._KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "",
    }),
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
