
import React, {useState} from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
function App () {
const [items, setItems] = useState([]);
function ClickAddButton(inputItem) {
    setItems((prevValue) => {
        return [...prevValue, inputItem]
    
    })   
}

function deleteItem(id) {
    setItems(prevItems => {
          return prevItems.filter(
              (item, index) => {
                  return index !== id;
              });
    });
}

    return (
        <div className="container">
            <div className="heading">
            <h1>To Do List</h1>
        </div>
         <InputArea
         onAdd={ClickAddButton} />
        

            <div>
            <ul>
                {items.map((toDoItem, index) => 
                (<ToDoItem 
                key= {index} 
                id={index}
                text={toDoItem}
                onChecked={deleteItem}
                /> ))}
               
            </ul>
            </div>
            </div>
    );
}

export default App;

