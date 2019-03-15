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
import axios from 'axios';
import Link from 'next/link';

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
});
class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    email:'',
    password:''
  };

    // get our form data out of state
    signin=()=>{
      const email=this.state.email;
      const pass=this.state.password;
      axios.post('http://localhost:4000/signin',{email,pass})
      .then((res)=>console.log(res));
      setTimeout(()=>{
        axios.get('')
        .then((res)=>{
          if(res.data=='ok')
          {
            this.props.history.push("/");
            axios('/',{email});
            axios.post('',email)
          }
          else if(res.data=='invalid')
          {
            this.setState({ error:"invalid login"});
          }
          else if(res.data=='notget')
          {
            this.setState({ error:"Account not create"})
          }
        }).catch((err)=>{console.log(err);
        throw err; 
      });
      },3000);
  email=(event)=>{
    this.setState({email:event.target.value})
  }
  pass=(event)=>{
    this.setState({password:event.target.value})
  }

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email"
             name="email" 
             type="email"
             //onChange={this.email.bind(this)}
             autoComplete="email" 
             autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password"              //onChange={this.pass.bind(this)}
 type="password" id="password" autoComplete="current-password" />
          </FormControl>
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
            //onClick={this.signin}
          >
            Sign in
          </Button>
        </form>
        Click here to new account
          <Link href="/registration">
            <a> Registration</a>
          </Link>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);