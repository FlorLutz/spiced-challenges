import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return;

  console.log(data);

  const { firstName, lastName, twitterName, geoHash } = data;

  return (
    <>
      <h1>user information</h1>
      <p>
        <strong>first name: </strong>
        {firstName}
      </p>
      <p>
        <strong>last name: </strong>
        {lastName}
      </p>
      <p>
        <strong>twitter name: </strong>
        {twitterName}
      </p>
      <p>
        <strong>geo hash: </strong>
        {geoHash}
      </p>
    </>
  );
}
