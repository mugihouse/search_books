import { useState } from "react";
import Form from "./components/Form";
import Item from "./components/Item";

export default function Home() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold">Search Books</h1>
        <div className="form-container">
          <Form query={query} setQuery={setQuery} setItems={setItems} />
        </div>
        <div className="book-items-container">
          <Item items={items} />
        </div>
      </div>
    </>
  );
}
