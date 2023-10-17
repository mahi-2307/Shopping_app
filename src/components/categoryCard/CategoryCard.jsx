import "./CategoryCard.scss";
import React, { useEffect, useState } from "react";
import { shoppingOptions, fetchData } from "../../fetchData";

function CategoryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list",
      shoppingOptions
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {data && data.length > 0 ? (
        data.slice(0, 1).map((category, index) => (
          <li key={index}>
            <a>{category.CatName}</a>
            <br />
            <ul>
              {category.CategoriesArray.map((subcategory, subIndex) => (
                <li key={subIndex}>
                  <p>{subcategory.CatName}</p>
                  {/* Render other subcategory fields here */}
                </li>
              ))}
              {category.CategoriesArray.map((subcategory, subIndex) => (
                <li key={subIndex}>
                  <p>{subcategory.CatName}</p>
                  {/* Render other subcategory fields here */}
                </li>
              ))}
            </ul>
          </li>
        ))
      ) : (
        <li>Loading data...</li>
      )}
    </ul>
  );
}

export default CategoryCard;
