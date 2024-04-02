import useSWR from "swr";
import React from "react";
import Product from "@/Components/Product";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Index() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) {
    return;
  }
  console.log(data);
  return (
    <>
      <h1>ALL PRODUCTS</h1>
      {data.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            currency={product.currency}
          />
        );
      })}
    </>
  );
}
