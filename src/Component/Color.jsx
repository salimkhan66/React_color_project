import React, { useState } from "react";

function Color() {
  const colors = [
    {
      name: "Red",
      hex: "#FF0000",
    },
    {
      name: "Green",
      hex: "#00FF00",
    },
    {
      name: "Blue",
      hex: "#0000FF",
    },
    {
      name: "Yellow",
      hex: "#FFFF00",
    },
    {
      name: "Magenta",
      hex: "#FF00FF",
    },
    {
      name: "Cyan",
      hex: "#00FFFF",
    },
    {
      name: "Black",
      hex: "#000000",
    },
    {
      name: "purple",
      hex: "#800080",
    },
    {
      name: "Pink",
      hex: "#FFC0CB",
    },
  ];

  const [color, setColor] = useState("");
  const changeColor = (hex) => {
    setColor(hex);
  };

  return (
    <div
      className="container-fluid  h-screen w-full "
      style={{ backgroundColor: color }}
    >
      <div className="bg-gray-500 py-3 absolute bottom-3 right-2 ">
        {colors.map((item, idx) => (
          <button
            className="px-4 py-2 mx-2 rounded text-white font-semibold "
            key={idx}
            style={{ backgroundColor: item.hex }}
            onClick={() => changeColor(item.hex)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Color;
