export default function Layout({ children }) {
  return (
    <>
      <h3>{process.env.NEXT_PUBLIC_HASURA_API_ENDPOINT}</h3>
      <div>{children}</div>
    </>
  );
}
