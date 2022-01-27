import config from "../app/config";

export default function postClient({ name, email, phone }, callback) {
  return fetch(`${config.API_URL}/customers`, {
    method: "POST",
    headers: {
      // Authorization: `Token ${config._KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
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
