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
        background: { color: { value: "#0a0a0a" } }, // hitam pekat
        fpsLimit: 60,
        particles: {
          number: { value: 200, density: { enable: true, area: 900 } },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            polygon: { sides: 5 }, // hexagon
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.15,
              sync: false,
            },
          },
          line_linked: {
            enable_auto: true,
            distance: 700,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
            shadow: {
              enable: true,
              color: "#ffffff",
              blur: 1,
            },
            },
          size: {
            value: { min: 0.5, max: 1 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            bounce: true,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 100,
              links: { opacity: 0.7 },
              radius: 100,
            },
           Grab: {

           }   
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
        filter: "drop-shadow(0 0 4px #fff)", // glow halus
      }}
    />
  );
}
