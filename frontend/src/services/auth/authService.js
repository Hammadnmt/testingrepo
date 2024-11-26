import axios from "axios";

let baseURL = "/api";
export async function login(userdata) {
  const response = await axios.post(baseURL + "/auth/login", {
    email: userdata.email,
    password: userdata.password,
  });
  return await response.data;
}
