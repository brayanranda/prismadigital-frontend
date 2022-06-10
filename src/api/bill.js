import { API_HOST } from "../utils/constant";

export async function uploadUserBillApi(user, bill) {
  const url = `${API_HOST}/users/${user}/bills`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bill),
  };

  const response = await fetch(url, params);
  const result = await response.json();
  return result;
}

export async function deleteUserBillApi(user, bill_id) {
  const url = `${API_HOST}/users/${user}/bills/${bill_id}`;
  const params = {
    method: "DELETE",
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}
