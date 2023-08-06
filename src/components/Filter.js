import React from "react";
import Item from "./Item";
import itemData from "../data/items";

function Filter({onCategoryChange, selectedCategory}){
    
  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });
  const itemsObj = itemsToDisplay.map(item=><Item key={item.id} name={item.name} category={item.category} />)   
  
 return (
    <div className="ShoppingList">
    <div className="Filter">
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    <ul className="Items">
        {itemsObj}
    </ul>
    </div>
    )
}

export default Filter