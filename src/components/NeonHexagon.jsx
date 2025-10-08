import React from 'react';

const NeonHexagon = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          transform: `scale(${1 - i * 0.1})`, 
          animation: `pulse-glow 4s ease-in-out ${i * 0.2}s infinite`,
          '--scale': 1 - i * 0.1
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 50,5 L 95,27.5 L 95,72.5 L 50,95 L 5,72.5 L 5,27.5 Z"
            stroke="rgba(192, 132, 252, 0.5)"
            strokeWidth="3"
            fill="none"
            style={{
              opacity: 1 - i * 0.15
            }}
          />
        </svg>
      </div>
    ))}
  </div>
);

export default NeonHexagon;

