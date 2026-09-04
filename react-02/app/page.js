// import styles from "./page.module.css";
import { MyButton } from "@/components/MyButton";

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function MyApp() {
  let name = "Maria";
  let user = { name: "Maria", email: "maria@email.com" };
  user.password = "mySuperSecretPassword";
  // delete user.email;

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <>
      <h1>Bem vindo ao meu app, {name}!</h1>
      <hr />
      <ul>{listItems}</ul>
      <hr />
      <p>Nome = {user.name} - E-mail: {user.email} - password: {user.password}</p>
      <hr />
      <MyButton />
      <MyButton />
      <hr />
      {user.email !== undefined && <h3>e-mail: {user.email}</h3>}
      <hr />
            {user.email !== undefined ? (
        <h3>e-mail: {user.email}</h3>
      ) : (
        <h3>e-mail não definido!</h3>
      )}
    </>
  );
}
