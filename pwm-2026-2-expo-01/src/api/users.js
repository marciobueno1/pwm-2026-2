import axios from "axios";

const headerJson = { "Content-Type": "application/json" };
const headerRevocableSession = { "X-Parse-Revocable-Session": "1" };

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 5000,
  headers: {
    "X-Parse-Application-Id": "t4wZSEfltZ4QtFBZX5LY9hyyx4I45uAbjsrwzCAi",
    "X-Parse-REST-API-Key": "ZXx7xAlvFOyZith0HDnSpWdlHxnnATKsdgakYg4Q",
  },
});

export async function signingUp({ username, password, email }) {
  return await instance.post(
    "/users",
    { username: username, password: password, email: email },
    {
      headers: { ...headerJson, ...headerRevocableSession },
    },
  );
}

export async function loggingOut({ sessionToken }) {
  return await instance.post("/logout", {
    headers: { "X-Parse-Session-Token": sessionToken },
  });
}

export async function loggingIn({ username, password }) {
  console.log("enviando: ", username, password);
  return await instance.post(
    "/login",
    { username: username, password: password },
    {
      headers: { ...headerJson, ...headerRevocableSession },
    },
  );
}
