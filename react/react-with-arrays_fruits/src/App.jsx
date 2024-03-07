import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🥑 Avocado",
      color: "green",
    },
    {
      id: 4,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 5,
      name: "🍋 Lemon",
      color: "yellow",
    },
    {
      id: 6,
      name: "🥭 Strawberry",
      color: "red",
    },
    {
      id: 7,
      name: "🍍 Pineapple",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card fruit={fruit} />
      ))}
    </div>
  );
}
