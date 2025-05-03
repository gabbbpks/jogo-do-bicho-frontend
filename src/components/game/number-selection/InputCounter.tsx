
import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface InputCounterProps {
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  className?: string;
}

const InputCounter: React.FC<InputCounterProps> = ({
  value,
  onChange,
  min = 1,
  max = 10,
  className = ""
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^[0-9]*$/.test(newValue)) {
      const numValue = newValue === "" ? min : parseInt(newValue);
      if (numValue <= max && numValue >= min) {
        onChange(newValue);
      }
    }
  };

  const increment = () => {
    const currentValue = parseInt(value || "0");
    if (currentValue < max) {
      onChange((currentValue + 1).toString());
    }
  };

  const decrement = () => {
    const currentValue = parseInt(value || "0");
    if (currentValue > min) {
      onChange((currentValue - 1).toString());
    }
  };

  return (
    <div className="flex items-center">
      <input 
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={min.toString()}
        className={`bg-[#1E1D2E] border border-[#2A2D45] rounded-lg px-3 py-2 w-20 text-center text-white ${className}`}
      />
      <div className="flex flex-col ml-1">
        <button 
          onClick={increment}
          className="bg-[#2A2D45] hover:bg-[#3B3E55] text-white rounded-t-md p-1"
          aria-label="Aumentar"
          disabled={parseInt(value || "0") >= max}
        >
          <ChevronUp className="w-3 h-3" />
        </button>
        <button 
          onClick={decrement}
          className="bg-[#2A2D45] hover:bg-[#3B3E55] text-white rounded-b-md p-1"
          aria-label="Diminuir"
          disabled={parseInt(value || "0") <= min}
        >
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default InputCounter;
