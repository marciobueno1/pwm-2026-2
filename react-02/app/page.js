// import styles from "./page.module.css";
import { MyButton } from "@/components/MyButton";

export default function MyApp() {
  let name = "Maria";
  let user = { name: "Maria", email: "maria@email.com" };
  user.password = "mySuperSecretPassword";
  delete user.email;
  return (
    <>
      <h1>Bem vindo ao meu app, {name}!</h1>
      <hr />
      <p>Nome = {user.name} - E-mail: {user.email} - password: {user.password}</p>
      <hr />
      <MyButton />
    </>
  );
}
