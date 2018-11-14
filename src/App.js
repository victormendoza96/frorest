import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './title.js';
export default class App extends Component {
  render() {
    return (
      <section>

        <div>
          <div>
            <Title></Title>
            <button>registrate gratis</button>
           
            <div>
              <ul>
                <li>
                  <h3>calificaciones con emociones</h3>
                  <p>califica tus lugares con experiencias, no con numeros</p>
                </li>
                <li>
                  <h3>¿Sin Internet? Sin Problemas</h3>
                  <p>Findnes funciona sin internet y en conecciones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>Define tu lista de sitios favoritos</p>
                </li>
              </ul>
            
            </div>
          </div>
          
        </div>

      </section>
    );
  }
}


