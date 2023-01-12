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

export class FormStepFour extends Component {
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
                      Delivery 1/2
                  </Typography>
                      </AppBar>
                      <br/>
                      <Alert severity="info">{"Para recogida en Local NO modifique los datos y siga adelante"}</Alert>
                      <br/>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Te lo llevamos?</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.delivery}
                    label="delivery"
                    onChange={handleChange('delivery')}
                    >
                    <MenuItem value={"si"}>Si</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                    </Select>
                  </FormControl>
                  <br/>
                  <div>
                  <TextField
                  label="Calle"
                  onChange={handleChange('street')}
                  defaultValue={values.street}/>
                  <TextField
                  label="Number"
                  onChange={handleChange('number')}
                  defaultValue={values.number}/>
                  </div>
                  <TextField
                  label="Codigo Postal"
                  onChange={handleChange('zipnum')}
                  defaultValue={values.zipnum}/>
                  <TextField
                  label="Provincia"
                  onChange={handleChange('province')}
                  defaultValue={values.province}/>
                  <br/>
                  <div className='button-container'>
                  <Button variant="contained"
                  onClick={this.continue}>Continue</Button>
                  <Button variant="contained"
                  color='secondary'
                  onClick={this.back}>Back</Button>
                  </div>
               </div>
            </React.Fragment>

    )
  }
}

export default FormStepFour