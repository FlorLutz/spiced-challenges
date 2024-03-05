import "./App.css";

export default function App() {
  return <Sum valueA={5} valueB={8} />;
}

function Sum({ valueA, valueB }) {
  return (
    <p>
      This is the desired operation: {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
