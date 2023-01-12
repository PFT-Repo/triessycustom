import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './FormUserData.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';


export const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#6776cb',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

export class FormStepTwo extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const {values,handleChange} = this.props;
    return (
        
           <React.Fragment >
              <div className='DataContainer'>
                  <AppBar position="static">
                  <Typography variant="h6" color="inherit" component="div">
                      Destalles de tu pedido 1/2
                  </Typography>
                      </AppBar>
                      <br/>
                      <Alert severity="info">{"Selecciona tus preferencias"}</Alert>
                      <br/>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Porciones</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.portions}
                    label="portions"
                    onChange={handleChange('portions')}
                    >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={55}>55</MenuItem>
                    <MenuItem value={60}>60</MenuItem>
                    <MenuItem value={65}>65</MenuItem>
                    <MenuItem value={70}>70</MenuItem>
                    <MenuItem value={75}>75</MenuItem>
                    <MenuItem value={80}>80</MenuItem>
                    <MenuItem value={85}>85</MenuItem>
                    <MenuItem value={90}>90</MenuItem>
                    <MenuItem value={95}>95</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={105}>105</MenuItem>
                    <MenuItem value={110}>110</MenuItem>
                    <MenuItem value={115}>115</MenuItem>
                    <MenuItem value={120}>120</MenuItem>
                    <MenuItem value={125}>125</MenuItem>
                    <MenuItem value={130}>130</MenuItem>
                    <MenuItem value={135}>135</MenuItem>
                    <MenuItem value={140}>140</MenuItem>
                    <MenuItem value={145}>145</MenuItem>
                    <MenuItem value={150}>150</MenuItem>
                    <MenuItem value={155}>155</MenuItem>
                    <MenuItem value={160}>160</MenuItem>
                    <MenuItem value={165}>165</MenuItem>
                    <MenuItem value={170}>170</MenuItem>
                    </Select>
                  </FormControl>
                  <br/>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sabor</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.flavour!=''?values.flavour:"Select"}
                    label="Sabor"
                    onChange={handleChange('flavour')}
                    >
                    <MenuItem value={"Vainilla"}>Vainilla</MenuItem>
                    <MenuItem value={"Chocolate"}>Chocolate</MenuItem>
                    <MenuItem value={"Marmoleada"}>Marmoleada</MenuItem>
                    <MenuItem value={"Red Velve"}>Red Velvet</MenuItem>
                    <MenuItem value={"Carrot Cake"}>Carrot Cake</MenuItem>
                    <MenuItem value={"Dulce de Leche"}> Dulce de Leche </MenuItem>
                    <MenuItem value={"Limón"}> Limón </MenuItem>
                    <MenuItem value={"Coco"}> Coco </MenuItem>
                    <MenuItem value={"Otro"}>Otro, escribir en detalles</MenuItem>
                    </Select>
                  </FormControl>
                  <br/>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Relleno</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.fill!=''?values.fill:"Selecciona"}
                    label="relleno"
                    onChange={handleChange('fill')}
                    >
                    <MenuItem value={"Vainilla"}>Vainilla</MenuItem>
                    <MenuItem value={"Chocolate"}>Chocolate</MenuItem>
                    <MenuItem value={"CheeseCream"}> CheeseCream </MenuItem>
                    <MenuItem value={"Nata"}> Nata </MenuItem>
                    <MenuItem value={"Mermelada de Fresa"}> Mermelada de Fresa </MenuItem>
                    <MenuItem value={"Kit-kat"}> Kit-kat </MenuItem>
                    <MenuItem value={"Oreo"}> Oreo </MenuItem>
                    <MenuItem value={"Kinder Bueno"}> Kinder Bueno </MenuItem>
                    <MenuItem value={"Dulce de Leche"}>Dulce de Leche</MenuItem>
                    <MenuItem value={"Nutella"}>Nutella</MenuItem>
                    <MenuItem value={"Trufa"}>Trufa</MenuItem>
                    <MenuItem value={"Crema Pastelera"}>Crema Pastelera</MenuItem>
                    <MenuItem value={"Otro"}>Otro, escribir en detalles</MenuItem>
                    </Select>
                  </FormControl>
                  <br/>
                  <div className='button-container'>
                  <Button variant="contained"
                  onClick={values.fill&&values.flavour!= ''?this.continue:""}>Continue</Button>
                  <Button variant="contained"
                  color='secondary'
                  onClick={this.back}>Back</Button>
                  </div>
               </div>
            </React.Fragment>

    )
  }
}

export default FormStepTwo