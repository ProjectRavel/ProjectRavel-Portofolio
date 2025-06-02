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
      id="tsparticles-tech"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#0a0a0a" } }, // warna latar belakang
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1200,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle", // lebih ringan daripada polygon
          },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: false }, // nonaktifkan animasi opacity
          },
          size: {
            value: 0,
            random: true,
            anim: { enable: false }, // nonaktifkan animasi size
          },
         
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 100,
              links: {
                opacity: 1,
              },
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
        filter: "drop-shadow(0 0 2px #ffffff33)", // glow tipis, rgba
      }}
    />
  );
}
