import "./Card.css";

export default function Card({ fruit }) {
  return (
    <p key={fruit.id} className={`card card--${fruit.color}`}>
      {fruit.name}
    </p>
  );
}
