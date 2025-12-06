import React from "react";
import { Particles } from "@tsparticles/react";

const Particle: React.FC = () => {
  const options = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      links: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right" as const,
        enable: true,
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default Particle;
