import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [grocery, setGrocery] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [action, setAction] = useState("");
  const [alert, setAlert] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (editIndex !== null) {
        const newGrocery = groceryList.slice();

        const result = newGrocery.map((oldGrocery, index) => {
          if (editIndex === index) {
            return (oldGrocery = grocery);
          } else {
            return oldGrocery;
          }
        });

        setGroceryList(result);
        setAlert(true);
        setAction("edited");
        setGrocery("");
        setEditIndex(null);
      } else {
        if (groceryList.length < 9) {
          setGroceryList([...groceryList, grocery]);
          setGrocery("");
          setAction("created");
          setAlert(true);
        } else {
          setAction("length");
          setAlert(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (item) => {
    const newGrocery = groceryList.slice();
    const result = newGrocery.filter((i, index) => {
      if (index !== item) {
        return i;
      }
    });
    setGroceryList(result);
  };

  const handleEdit = (item, index) => {
    setGrocery(item);
    setEditIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="bg-slate-100 flex justify-center items-start h-screen">
      {/* MAIN CONTAINER */}
      <div className="shadow-xl bg-white min-h-2/5 w-4/12 mt-40 ">
        {/* CONTAINER HEADER */}
        <div className="flex justify-end items-center flex-col h-1/5 py-3">
          <Alert error={action} alert={alert} />
          <h2 className="text-3xl">Grocery Bud</h2>
        </div>

        {/* CONTAINER FORM */}
        <div className="flex justify-start items-center flex-col pt-10 h-4/5">
          <form
            className="flex justify-between items-center"
            onSubmit={handleSubmit}
          >
            <input
              className=" w-5/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            
             "
              type="text"
              value={grocery}
              onChange={(e) => setGrocery(e.target.value)}
              placeholder="e.g. eggs"
              required
            />
            <button
              className="w-3/12 ml-1 h-5/6 rounded bg-blue-400 text-slate-200 hover:bg-blue-500 hover:transition-all hover:text-slate-100 "
              type="submit"
            >
              Submit
            </button>
          </form>
          {/* LIST */}
          <div className="px-10 py-7 h-full w-full flex flex-col">
            {groceryList.map((item, index) => {
              return (
                <List
                  key={index}
                  item={item}
                  dltFunc={handleDelete}
                  editFunc={handleEdit}
                  index={index}
                />
              );
            })}
          </div>
          <button
            className="text-red-500 w-full hover:bg-gray-100 active:bg-gray-200"
            onClick={() => setGroceryList([])}
          >
            CLEAR ITEMS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
