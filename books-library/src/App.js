import { useState, useEffect } from "react";
import "./App.css";

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
  if (data) {
    return <div className="container">{data.docs[0].title}</div>;
  }

  return <h1>Hello</h1>;
}

export default App;
