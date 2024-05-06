import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import ProductForm from "../ProductForm";
import Comments from "../Comments";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    console.log("productData", productData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct(idOfProduct) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { name, description, price, currency, reviews } = data;

  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>
      {reviews.length > 0 && <Comments reviews={reviews} />}
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit item
      </button>
      <button
        onClick={() => {
          handleDeleteProduct(id);
        }}
      >
        Delete item
      </button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          formHeadline={"Edit this fish"}
          name={name}
          description={description}
          price={price}
          currency={currency}
        />
      )}
      <br />
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
