export default function UserPage({ user }) {
  return (
    <div>
      <h1>User</h1>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user },
  };
}
