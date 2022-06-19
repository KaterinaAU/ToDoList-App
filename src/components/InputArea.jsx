import React, { useState } from "react";

function InputArea(props){

    const [inputItem, setInputItem] = useState("");

    function ItemAdd(event) {

        const newValue = event.target.value; 
       
       setInputItem(newValue);
       
       }
    return (
        <div className="form">
          <input onChange={ItemAdd} 
          type= "text"
          value={inputItem}
          />
          <button>
              <span
              onClick={() => {
                  props.onAdd(inputItem)
                  setInputItem("");
              }}>Add</span>
          </button>
            </div>
    );
}
export default InputArea;