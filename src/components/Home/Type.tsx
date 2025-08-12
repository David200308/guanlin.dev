import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <>
      <style>
        {`
          .typewriter-container .Typewriter__wrapper {
            position: relative !important;
          }
        `}
      </style>
      <div 
        className="typewriter-container"
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "clamp(4px, 1vw, 12px)",
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          maxWidth: "100%",
          position: "relative"
        }}
      >
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          flexShrink: 1,
          minWidth: 0,
          position: "relative"
        }}>
          <Typewriter
            options={{
              strings: ["Software Engineer @OKX"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
            }}
          />
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="590 548 1350 1370" 
          preserveAspectRatio="xMidYMid meet"
          style={{ 
            width: "clamp(16px, 3vw, 32px)",
            height: "clamp(16px, 3vw, 32px)",
            minWidth: "16px",
            minHeight: "16px",
            flexShrink: 0
          }}
        >
          <g>
            <path 
              d="M1464.3,1015.3h-405.2c-17.2,0-31.3,14.1-31.3,31.3v405.2c0,17.2,14.1,31.3,31.3,31.3h405.2c17.2,0,31.3-14.1,31.3-31.3v-405.2C1495.6,1029.4,1481.5,1015.3,1464.3,1015.3z"
              fill="currentColor"
            />
            <path 
              d="M996.6,549.1H591.4c-17.2,0-31.3,14.1-31.3,31.3v405.2c0,17.2,14.1,31.3,31.3,31.3h405.2c17.2,0,31.3-14.1,31.3-31.3V580.4C1027.8,563.2,1013.8,549.1,996.6,549.1z"
              fill="currentColor"
            />
            <path 
              d="M1930.5,549.1h-405.2c-17.2,0-31.3,14.1-31.3,31.3v405.2c0,17.2,14.1,31.3,31.3,31.3h405.2c17.2,0,31.3-14.1,31.3-31.3V580.4C1961.8,563.2,1947.7,549.1,1930.5,549.1z"
              fill="currentColor"
            />
            <path 
              d="M996.6,1481.5H591.4c-17.2,0-31.3,14.1-31.3,31.3V1918c0,17.2,14.1,31.3,31.3,31.3h405.2c17.2,0,31.3-14.1,31.3-31.3v-405.2C1027.8,1495.6,1013.8,1481.5,996.6,1481.5z"
              fill="currentColor"
            />
            <path 
              d="M1930.5,1481.5h-405.2c-17.2,0-31.3,14.1-31.3,31.3V1918c0,17.2,14.1,31.3,31.3,31.3h405.2c17.2,0,31.3-14.1,31.3-31.3v-405.2C1961.8,1495.6,1947.7,1481.5,1930.5,1481.5z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Type;
