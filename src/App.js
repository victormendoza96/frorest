import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {deepPurple} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Title from './title.js';

const theme = createMuiTheme({
  palette: {
    primary:  {main: deepPurple[400]},
  },
   typography: {
    useNextVariants: true,
  },
});
export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme= {theme} >
        <div className="center-body">
          <div style={{"width":"80%","margin":"0 auto"}}>
            <div className = "main-content">
              <Title></Title>
              <Button variant="contained" color="primary">registrate gratis</Button>
              <img className="main-img" src={process.env.PUBLIC_URL + '/image/maptravel.png'} alt="viaje"/>
            </div> 
            <div>
              <ul>
                <Card className = "card-style">
                  <div className="card-text" >
                    <CardMedia className="img-property"
                      style={{'backgroundColor':deepPurple[50]}}
                      image='/image/heart.png'
                      title="Live from space album cover"
                    />
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      calificaciones con emociones
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      califica tus lugares con experiencias, no con numeros
                      </Typography>
                  </CardContent>
                  </div>
                </Card>
                
                <Card className = "card-style">
                  <div className="card-text" >
                    <CardMedia className="img-property"
                      style={{'backgroundColor':deepPurple[50]}}
                      image='/image/star.png'
                      title="Live from space album cover"
                    />
                    <CardContent>
                      <Typography component="h5" variant="h5">
                       calificaciones con emociones
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                       califica tus lugares con experiencias, no con numeros
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
                
                <Card className = "card-style">
                  <div className="card-text" >
                    <CardMedia className="img-property"
                      style={{'backgroundColor':deepPurple[50]}}
                      image='/image/wifi.png'
                      title="siempre conectado"
                    />
                    <CardContent>
                      <Typography component="h5" variant="h5">
                        sin wifi? sin problema!!
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        findness funciona sin internet o en conexiones lentas
                      </Typography>
                    </CardContent>
                  </div>
                </Card>   
              </ul>  
            </div>
          </div>
        </div>
        <div style={{'backgroundColor':deepPurple[400], 'padding': '50px'}}>
          
        </div>
      </MuiThemeProvider>
    );
  }
}


