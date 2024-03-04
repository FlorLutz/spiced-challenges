import "./App.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is an h2</h2>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Sveti_Juraj"
      >
        Nice Article
      </a>
    </article>
  );
}
