import "./App.css";

export default function App() {
  return <Greeting name="Markus" />;
}

function Greeting({ name }) {
  return <p>Hello {name}</p>;
}
