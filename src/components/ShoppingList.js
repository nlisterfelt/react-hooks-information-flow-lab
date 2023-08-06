import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
 
  return (
    
        
        <Filter onCategoryChange={onCategoryChange} selectedCategory={selectedCategory}/>

  );
}

export default ShoppingList;
