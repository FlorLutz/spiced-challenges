import "./App.css";

export default function App() {
  return (
    <main>
      <Button>click me</Button>
      <Button>use me</Button>
      <Button>touch me</Button>
      <Button>do me</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
