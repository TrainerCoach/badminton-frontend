import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://derwebtrainer.eu.pythonanywhere.com/api/categories/")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Badminton Übungen Kategorien</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}