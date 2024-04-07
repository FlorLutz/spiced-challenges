import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  if (data.reviews) {
    console.log(data.reviews);
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      {data.reviews.length > 0 && <h2>reviews</h2>}
      {data.reviews &&
        data.reviews.map((review) => {
          return (
            <>
              <strong>{review.title}</strong>
              <br></br>
              <p>{review.text}</p>
              <p>{`rating: ${review.rating}`}</p>
            </>
          );
        })}
    </ProductCard>
  );
}
