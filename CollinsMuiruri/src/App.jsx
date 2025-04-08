import React, { useState } from "react";

export default function DynamicListApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-600 mb-4">Dynamic List Manager</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter an item"
            className="flex-1 px-4 py-2 border border-teal-400 rounded-l-md focus:outline-none text-teal-700 placeholder-gray-400"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-teal-500 text-white font-medium rounded-r-md hover:bg-teal-600"
          >
            Add Item
          </button>
        </div>
        <div className="border border-teal-200 bg-teal-50 rounded-md p-4">
          {items.length === 0 ? (
            <p className="text-teal-600 italic">No items added yet.</p>
          ) : (
            <ul className="list-disc list-inside text-teal-700">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
