import Link from "next/link";
import React from "react";

const Home: React.FC = ({ users }: any) => {
  return (
    <div>
      <h1>Пользователи</h1>
      {!users || !Array.isArray(users) ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`users/${user.id}`}>{user.firstName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/users");
  const result = await response.json();
  return {
    props: { users: result.users },
  };
}
