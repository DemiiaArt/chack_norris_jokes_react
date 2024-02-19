import React from "react";
import { useState, useEffect } from "react";
import "./Categories.scss";
import { jokesCategories } from "../../services/servicesAPI.js";

function Categories({ liftCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await jokesCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <ul className="jokesCategories" id="jokesCategories">
      {categories.map((cat, index) => (
        <li key={index}>
          <label>
            <input
              type="radio"
              name="jokeCat"
              value={cat}
              onChange={(e) => liftCategory(e.target.value)}
            />
            <span>{cat}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Categories);
