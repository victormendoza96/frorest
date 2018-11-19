import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {purple} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import './App.css';
import Title from './title.js';

  
export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider >
        <div>
          <div>
            <div>
              <Title></Title>
              <Button variant="contained" color="secondary">registrate gratis</Button>
              <img src={process.env.PUBLIC_URL + '/image/maptravel.png'} alt="viaje" height='300px'/>
            </div> 
            
            <div style={{'backgroundColor':purple[400]}}>
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

      </MuiThemeProvider>
    );
  }
}


