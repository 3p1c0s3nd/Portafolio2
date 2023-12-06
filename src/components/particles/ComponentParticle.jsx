import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ComponentParticle = ({ theme }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = theme === 'dark' ? darkOptions : lightOptions;

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

const darkOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    position: '50% 50%',
    size: '110% 100%',
    repeat: 'repeat',
    color: {
      value: '#00000f',
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        particles_nb: 4,
        quantity: 90,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#0f0',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: 'circle',
    },
    size: {
      min: 0.5,
      value: 3,
    },
  },
  detectRetina: true,
};

const lightOptions =  {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    position: '50% 50%',
    size: '110% 100%',
    repeat: 'repeat',
    color: {
      value: '#fffff0',
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        particles_nb: 4,
        quantity: 90,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#0f0',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: 'circle',
    },
    size: {
      min: 0.5,
      value: 3,
    },
  },
  detectRetina: true,
};

export default ComponentParticle;
