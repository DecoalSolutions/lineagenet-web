"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // IMPORTANT
        },
        background: {
          color: {
            value: "#0B1F1E",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80, // original density
          },
          color: {
            value: "#2FA8A0", // exact logo teal
          },
          links: {
            enable: true,
            distance: 150,
            color: "#2FA8A0",
            opacity: 0.5, // stronger and richer
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "out",
            },
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 0.8,
          },
        },
        detectRetina: true,
      }}
    />
  );
}