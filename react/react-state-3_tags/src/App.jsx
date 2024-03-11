import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(deletedTag) {
    setTags(tags.filter((tag) => tag !== deletedTag));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}
