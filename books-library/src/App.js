import { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://openlibrary.org/search.json?author=tolkien")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading())
      .catch(setError);
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (!data) {
    return null;
  }

  let array = data.docs;

  return (
    <div className="container">
      <Search />
      <ul className="list">
        {array.map((item, i) => {
          return (
            <li key={i} className="list-item">
              <i className="fa fa-book"></i> &nbsp;
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
