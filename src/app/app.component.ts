import { Component } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portafoliofire';
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions = {
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
    },
    fpsLimit: 60,
    emitters: {
      direction: 'top',
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.15,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 80,
        x: 50,
      },
    },
    particles: {
      number: {
        value: 0,
      },
      destroy: {
        mode: 'split',
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 35, // radio de cada lanzamiento artificial al destruirse
          },
          particles: {
            stroke: {
              color: {
                // colores de los fuegos artificiales
                value: [
                  '#ffffff',
                  '#00D1E7',
                  '#00D1E7',
                  '#000',
                  '#000',
                  '#000',
                ],
              },
              width: 4,
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.1,
                sync: true,
                startValue: 'max',
                destroy: 'min',
              },
            },
            shape: {
              type: 'square', //
            },
            size: {
              value: 1,
              animation: {
                enable: false,
                speed: 150,
                minimumValue: 1,
                destroy: 'max',
                startValue: 'min',
                sync: true,
              },
            },
            life: {
              count: 1,
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                inverse: false,
                acceleration: 1,
              },
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outMode: 'destroy',
            },
          },
        },
      },
      life: {
        count: 1,
      },
      shape: {
        type: 'line',
      },
      size: {
        value: 50,
        animation: {
          enable: true,
          sync: true,
          speed: 100,
          startValue: 'max',
          destroy: 'min',
        },
      },
      stroke: {
        color: {
          // COLOR DE CADA LANZAFUEGO
          value: '#00D1E7',
        },
        width: 2, // ANCHO DE CADA LANZA FUEGO
      },
      rotate: {
        path: true,
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100,
        },
        speed: { min: 10, max: 20 },
        outModes: {
          default: 'destroy',
          top: 'none',
        },
      },
    },
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
