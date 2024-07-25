import MyForm from "./Form/Form";
import Find from "./Find/Find";
import { useEffect, useState } from "react";
import { fetchNews } from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";

const App = () => {
  //==================== робота з бекендом, ГАЛЕРЕЯ ЗОБРАЖЕНЬ ========== axios , async/await=====================//
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchNews(query, page);
        setHits((prev) => [...prev, ...response.hits]);
        setTotal(response.nbPages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);
  const handleSetQuery = (query) => {
    setQuery(query);
    setHits([]);
    setPage(0);
  };
  //=========================================================================================//
  return (
    <>
      <p>Hello world!</p>
      {/* ========= робота з бекендом, ГАЛЕРЕЯ ЗОБРАЖЕНЬ ========== axios , async/await============  */}
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again please</h2>}
      <Find items={hits} />
      {total > page && !isLoading && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
      )}

      {/* ============ РОБОТА З ФОРМОЮ ====================== */}
      <MyForm />
      {/* =========================================================== */}
    </>
  );
};

export default App;
