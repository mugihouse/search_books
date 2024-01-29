import { useState } from "react";

const Form = () => {
  const [query, setQuery] = useState("");

  const changeQuery = (e) => setQuery(e.target.value);
  const handleFormSubmit = () => {
    console.log(query);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="キーワードを入力してください"
        value={query}
        onChange={changeQuery}
      />
      <button
        type="submit"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        検索
      </button>
    </form>
  );
};

export default Form;