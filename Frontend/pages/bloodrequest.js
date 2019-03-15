import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Register extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    name:'',
    email:'',
    gender: 'female',
    age: '',
    mobileno:'',
    bloodgroup:'',
    location:''
  };
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, email,gender,age,mobileno,bloodgroup,location } = this.state;

    axios.post('http://localhost:4000/bloodreq', 
      { name, email,gender,age,mobileno,bloodgroup,location })
      .then((result) => {
        //access the results here....
      });
  }
  render() {
    const { classes } = this.props;
    const { name, email,gender,age,mobileno,bloodgroup,location } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Blood Request
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name"
               name="name" 
               autoComplete="name" 
               autoFocus value={name} 
               onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">EMail</InputLabel>
              <Input name="email"
               type="email" 
               id="email" 
               autoComplete="current-password" 
               value={email} 
               onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
            <RadioGroup
              aria-label="Gender"
              name="gender"
              className={classes.group}
              value={gender}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
            <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="mobileno">Mobile no</InputLabel>
              <Input name="mobileno" 
              type="mobileno" 
              id="mobileno" 
              autoComplete="mobileno" 
              value={mobileno} 
              onChange={this.handleChange} />
            </FormControl>
            <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Bloog Group</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.bloodgroup}
            onChange={this.handleChange}
            inputProps={{
              name: 'bloodgroup',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'A+'}>A+</MenuItem>
            <MenuItem value={'A-'}>A-</MenuItem>
            <MenuItem value={'B+'}>B+</MenuItem>
          </Select>
        </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="location">Location</InputLabel>
              <Input name="location" 
              type="location" 
              id="location" 
              autoComplete="location" 
              value={location} 
              onChange={this.handleChange}/>
            </FormControl>
            <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="dd-mm-yy"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            
            
          </form>
        </Paper>
      </main>
    );
  }
  
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);