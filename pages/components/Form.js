import { getBooksByKeyword } from "../api/book";

const Form = ({ query, setQuery, setItems }) => {
  const changeQuery = (e) => setQuery(e.target.value);
  const searchBooks = async () => {
    const items = await getBooksByKeyword(query);

    setItems(items);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="キーワードを入力してください"
        value={query}
        onChange={changeQuery}
      />
      <button
        type="button"
        onClick={searchBooks}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        検索
      </button>
    </form>
  );
};

export default Form;
