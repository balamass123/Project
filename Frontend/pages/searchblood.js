import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';


  const styles = theme => ({
       button: {
     display: 'block',
     marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
root: {
  width: '100%',
  marginTop: theme.spacing.unit * 3,
  overflowX: 'auto',
},
 table: {
 minWidth: 700,
},
 row: {
   '&:nth-of-type(odd)': {
     backgroundColor: theme.palette.background.default,
   },
 },
 });
  
  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  
}))(TableCell);

class ControlledOpenSelect extends React.Component {
  state = {
    bloodgroup: '',
    location:'',
   // open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    // function CustomizedTable(props) {
    //   const { classes } = props;

    return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button>
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
        { <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo">Location</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.location}
            onChange={this.handleChange}
            inputProps={{
              name: 'location',
              id: 'demo',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Tirupur'}>Tirupur</MenuItem>
            <MenuItem value={'Coimbator'}>Coimbator</MenuItem>
            <MenuItem value={'Ooty'}>Ooty</MenuItem>
          </Select>
        </FormControl> }
        <Button variant="contained" color="primary" className={classes.button}>
        Search
      </Button>
      </form>
      );
    }
  }
  let id = 0;
function createData(name, gender, phoneno, bloodgroup, email,date,details) {
   id += 1;
   return { id, name, gender, phoneno, bloodgroup, email,date,details };
 }
 const rows = [
   createData('Bala', 'male', '9874651232','O+', 'bala@gmail.com', '18/12/1998','need a blood'),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
 ];

  function CustomizedTable(props) {
    const { classes } = props;

    return(
       <Paper className={classes.root}>
      <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <CustomTableCell>Name</CustomTableCell>
             <CustomTableCell align="right">Gender</CustomTableCell>
             <CustomTableCell align="right">Phone No</CustomTableCell>
             <CustomTableCell align="right">Blood group</CustomTableCell>
             <CustomTableCell align="right">Email</CustomTableCell>
             <CustomTableCell align="right">Date</CustomTableCell>
             <CustomTableCell align="right">Details</CustomTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
          {rows.map(row => (
             <TableRow className={classes.row} key={row.id}>
               <CustomTableCell component="th" scope="row">
                 {row.name}
               </CustomTableCell>
               <CustomTableCell align="right">{row.gender}</CustomTableCell>
               <CustomTableCell align="right">{row.phoneno}</CustomTableCell>
               <CustomTableCell align="right">{row.bloodgroup}</CustomTableCell>
               <CustomTableCell align="right">{row.email}</CustomTableCell>
               <CustomTableCell align="right">{row.date}</CustomTableCell>
               <CustomTableCell align="right">{row.details}</CustomTableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </Paper>
     );
  }
   ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
   };
 CustomizedTable.propTypes = {
   classes: PropTypes.object.isRequired,
 };
 

export default withStyles(styles)(ControlledOpenSelect);
//export default withStyles(styles)(CustomizedTable);