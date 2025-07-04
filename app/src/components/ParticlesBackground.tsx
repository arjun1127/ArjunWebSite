import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import type { ISourceOptions } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.1,
        random: true,
      },
      size: {
        value: 2,
        random: true,
      },
      move: {
        enable: true,
        direction: 'bottom',
        speed: 1,
        outModes: {
          default: 'out',
        },
      },
    },
    background: {
      color: 'transparent',
    },
  };

  return (
    <div className="absolute inset-0 z-0">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;
