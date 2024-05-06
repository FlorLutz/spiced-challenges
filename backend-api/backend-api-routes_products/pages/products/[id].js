import useSWR from "swr";
import React from "react";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) {
    return;
  }
  console.log(data);
  const { name, category, description, price, currency } = data;
  return (
    <>
      <h1>PRODUCTDETAILS</h1>
      <h2>{`Product: ${name}`}</h2>
      <h3>{`Category: ${category}`}</h3>
      <p>{`Description: ${description}`}</p>
      <p>{`Price: ${price} ${currency}`}</p>
      <button>BUY NOW!</button>
    </>
  );
}
