import config from "../app/config";

export default function deleteClient(id, callback) {
  return fetch(`${config.API_URL}/customers/${id}`, {
    method: "DELETE",
    headers: {
      // Authorization: `Token ${config._KEY}`,
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
