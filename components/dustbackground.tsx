"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // putih
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: false,
            },
          },
          size: {
            value: { min: 1, max: 1 },
            random: true,
          },
          links: {
            enable: true,
            distance: 400,
            color: "#ffffff", // garis putih
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // garis akan ditarik ke kursor
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.7,
              },
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
