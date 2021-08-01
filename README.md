<div align="center">
<img src="https://i.ibb.co/cvmT06q/fuego.png" alt="particulasjs" border="0">
</div>
<br>

## **Video del Proyecto** 
[2021🚀 Efecto Fuegos Artificiales - Responsivo [Angular 12 & Particulas JS]](https://youtu.be/Q23xyrn_9oE "Youtube")
<br/>

## Fuegos Aritificiales

Este proyecto se generó con [Angular CLI] (https://github.com/angular/angular-cli) versión 12.0.5.


## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Vaya a `http: // localhost: 4200 /`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

### Demostracioó de la aplicación en web:

<div>
<img src="https://i.ibb.co/Hq0wmJX/pantallacompleta.gif" alt="particulasjs" border="0" width:50%>
</div>
<br>

### Demostración en tablet:

<div>
<img src="https://i.ibb.co/gMKYzWS/tablets.gif" alt="tablet" border="0">
</div>
<br>

### Demostración en móvil:

<div>
<img src="https://i.ibb.co/BCdYkBb/mobile.gif" alt="movil" border="0">
</div>

## INSTALACION DE NG-PARTICLES EN ANGULAR-12

#### Instalar usando npm
[![anix](https://nodei.co/npm/proton-engine.png)](https://npmjs.org/package/proton-engine)

##### Nota: la versión usada es "ng-particles": "^2.14.1", "tsparticles": "^1.31.1",

```shell
npm install ng-particles tsparticles
```
```yarn
yarn add ng-particles tsparticles
```

#### importar en <b> app.module.ts </b>
```javascript
import { NgParticlesModule } from 'ng-particles';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    /* AppComponent */
  ],
  imports: [
    /* other imports */ NgParticlesModule // NgParticlesModule is required
  ],
  providers: [],
  bootstrap: [ /* AppComponent */ ]
})
export class AppModule { }
```


#####  *app.component.ts*
``` shell
importaciones necesarias 
```

```javascript
import { Component } from '@angular/core';
import { Container, Main } from 'tsparticles';
```

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
            value: 35,
          },
          particles: {
            stroke: {
              color: {
                value: ['#ffffff', '#00d1e7', '#00d1e7', '#000', '#000'],
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
              type: 'square',
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
          value: '#00d1e7',
        },
        width: 2,
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
  }
}
```

##### template.html

```html
<ng-particles [id]="id" [options]="particlesOptions" (particlesLoaded)="particlesLoaded($event)"
  (particlesInit)="particlesInit($event)"></ng-particles>
```

## Ayuda adicional

Para obtener más ayuda sobre ng-particles visite https://www.npmjs.com/package/ng-particles.
<br>
Pagina de ng-particle https://particles.js.org/
<br>
Ejemplos utlizados con ng-particle https://codepen.io/collection/DPOage

## Redes Sociales
`<YouTube>` : <https://www.youtube.com/channel/UCFPYlFz5afh_o7tVW--htKw>
<br/>
`<Facebook>` : <https://www.facebook.com/kidvskat.code>
