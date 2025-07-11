import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Software Engineer @OKX",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          
        }}
      />
      {/* <Typewriter
        options={{
          strings: [
            "Graduated UG Student @HKPolyU"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      /> */}
    </div>
    
  );
}

export default Type;
