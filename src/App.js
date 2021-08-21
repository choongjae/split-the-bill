import './App.css';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  container: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(4),
    width: '100%',
    height: theme.spacing(32),
  },
  text: {
    margin: theme.spacing(4),
    fontSize: 18,
  }
});


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      error: false,
      screen: 0,
      testing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.checkTransition = this.checkTransition.bind(null, this);

  }

  handleChange(e){
    // const re = /^[0-9\b]+$/;
    const re = /^\d*\.?\d*$/;
    const test = !((e.target.value == '' || re.test(e.target.value) && e.target.value != '.'))
    this.setState({value: e.target.value});
    this.setState({error: test})
    }

  handleEnter(e){
    if (e.charCode == '13' && this.state.error == false && this.state.value != ''){
      // alert("Screen is "+this.state.screen)
      // alert(this.state.screen + 1);
      this.setState({screen: this.state.screen + 1})
      // alert("Screen changed to "+this.state.screen);
    }
  }

  checkTransition(newscreen){
    return this.state.screen == newscreen
  }

  render() {
    const {classes} = this.props;
    let scrn;
    if (this.state.screen == 0){
      //  scrn =  <Slide direction="left" in={true}> 
      scrn= <div>
      <Paper  className = {classes.paper}>
              <Typography className={classes.text} component='p' align='center'>
                Welcome to Split the Bill: React Prototype v2!
                <br></br>
                Please enter all numbers in Arabic numbers (1, 2, 3, etc.)
                <br></br>
                What was the total cost of your bill?
              </Typography>
              </Paper>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                  // type="number"
                  onChange={this.handleChange}
                  value = {this.state.value}
                  error = {this.state.error}
                  onKeyPress = {this.handleEnter}
                />
              </FormControl>
              </div>
            //  </Slide> 
    }
    else {
      // scrn = <Slide direction="left" in={true}>
      scrn = <div>
      <Paper  className = {classes.paper}>
      <Typography className={classes.text} component='p' align='center'>
        Welcome to Split the Bill: React Prototype v2!
        <br></br>
        Please enter all numbers in Arabic numbers (1, 2, 3, etc.)
        <br></br>
        What was the total cost of your bill?
      </Typography>
      </Paper>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
          // type="number"
          onChange={this.handleChange}
          value = {this.state.value}
          error = {this.state.error}
        />
      </FormControl>
      </div>
    // </Slide>
    }
    return (
      <Container component="main" maxWidth="xs">
        <div className = {classes.container}>
          <CssBaseline />
           {scrn}

          {/* <Slide direction="left" in={this.state.testing} mountOnEnter unmountOnExit> */}
          

        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(App)


// function App() {
//   return (
//     <div className = "Heading">
//       <h1>Welcome to Split the Bill: React Prototype v2</h1>
//       <h2>Please enter all numbers with Arabic numerals (1, 2, 3, etc.)</h2>
//       <form>
//         <label for = "total">How much was your total bill?</label>
//         <input id="total" name="total"></input>
//         <br></br>
//         <label for = "subtotal">How much was your subtotal (pre-tax total)?</label>
//         <input id="subtotal" name="subtotal"></input>
//         <br></br>
//         <label for = "tip">What percentage of the subtotal do you want to tip?</label>
//         <input id="tip" name="tip"></input> 
//         <br></br>
//         <label for = "partysize">How many people are you splitting the bill with?</label>
//         <input id="partysize" name="partysize"></input> 
//       </form>
//     </div>
//   );
// }

