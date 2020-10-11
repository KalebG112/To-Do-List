import React, { useState } from "react"


// function App() {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <header>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App(){
  const [items, setItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescrition, setCurrentDescrition] = useState("");
  const [currentDueDate, setCurrentDueDate] = useState("");

  const handleAdd = () => {
    if (currentTitle === "") alert ("Please add a Title");
    else if (currentDescrition === "") alert ("Please add a Description");
    else if (currentDueDate === "") alert ("Please add a DueDate")

    else{
      setItems([
        ...items,
        {
          title: currentTitle,
          description: currentDescrition,
          dueDate: currentDueDate
        },
      ]);
      setCurrentTitle("");
      setCurrentTitle("");
      setCurrentDueDate("");
    }
  }

  const TodoItem = ({ item }) => {
    const [checkedOff, setCheckedOff] = useState(false);
    

    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };

    const handleDelete = () => {
      const newArray = [];
      items.forEach((i) => {
        if (i !== item) newArray.push(i);
      });
      setItems(newArray);
    };

    return (
      <div
        style={{
          border: "1px solid black",
          textAlign: "left",
          padding: "20px",
          minWidth: "200px",
          display: "flex",
          flexDirection: "column",
          background: "white",
        }}
      >

      {checkedOff ? (
        <h1>
          <strike>{item.title}</strike>
        </h1>
      ) : (
        <>
          <h1 style={{ margin: 0 }}>{item.title}</h1>
          <p style= {{ margin:5 }}>Title: {item.title}</p>
          <p style= {{ margin:5 }}>Description: {item.description}</p>
          <p style= {{ margin:5 }}>Due: {item.dueDate}</p>
        </>
      )}

      <button onClick={handleCheckOff} style={{ marginBottom: "10px" }}>
        Check off 
      </button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return(

    <div 
      style={{ display:"flex",
              flexDirection:"column",
              background:"lightblue",
              alignItems:"center"}}
    >    
    <h1>To-Do List!</h1>
    <p>Enter your to-do list items, to keep track of your work.</p>
      <div
        style={{ display:"flex",
        flexDirection:"column",
        width:"300px",
        alignItems:"center"}}
      >
        <label style={{ marginBottom: "10px" }}>
          {"Title: "}
          <input 
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            />
        </label>

        <label style={{ marginBottom: "10px" }}>
          {"Description: "}
          <input 
            value={currentDescrition}
            onChange={(e) => setCurrentDescrition(e.target.value)}
            />
        </label>

        <label style={{ marginBottom: "10px" }}>
          {"DueDate: "}
          <input 
            value={currentDueDate}
            onChange={(e) => setCurrentDueDate(e.target.value)}
            />
        </label>

      </div>
    <button onClick={handleAdd} style={{ marginBottom: "20px" }}>
      Add Todo Item 
    </button>

    {items.map((item) => (
      <TodoItem item = {item} setItems={setItems} />
    ))}
    </div>
  );

}