"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gray-100 border-2 px-4 py-2"
      >
        Clicks: {count}
      </button>
    </div>
  );
}

export default Counter;
