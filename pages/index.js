import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold">Search Books</h1>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </>
  );
}
