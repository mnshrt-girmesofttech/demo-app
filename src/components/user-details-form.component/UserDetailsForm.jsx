import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import './UserDetailsForm.scss';
import UserProfile from '../user-profile.component/UserProfile';
class UserDetailsForm extends React.Component {

    state={
        name:"",
        age:"",
        address:"",
        fitnessReq:"fitness requirement",
        user:{},
        userLoaded:false
    }

    onChangeHandler= e => {
        const {name,value} = e.target;

        this.setState({[name]:value})
    }
    onSubmitHandler=e=>{
        e.preventDefault();
        const {user,...userData} = this.state
        this.setState({user:{...userData},userLoaded:true},console.log(this.state))
    }
 render(){
     const {name, age, address, fitnessReq, userLoaded,user} = this.state;
    return (
        userLoaded?(<div>{JSON.stringify(user)}</div>):(
        <div>
          <h1>Demo App</h1>
          
            <form onSubmit={this.onSubmitHandler}>
            <div className="form-container">
              <TextField className="outlined-basic" name="name" value={name} label="Name" variant="outlined" onChange={this.onChangeHandler} />
              <TextField className="outlined-basic" name="age" value={age} label="Age" variant="outlined" onChange={this.onChangeHandler}/>
              <TextField className="outlined-basic" name="address" value={address} label="Address" variant="outlined" onChange={this.onChangeHandler}/>
              <Select
               label="fitness requirement"
               name="fitnessReq"
               className="outlined-basic fitness-req"
               value={fitnessReq}
               onChange={this.onChangeHandler}
               variant="outlined"
               >
               <MenuItem value="fitness requirement" disabled>fitness requirement</MenuItem>
               <MenuItem value="yoga">yoga</MenuItem>
               <MenuItem value="aerobics">aerobics</MenuItem>
               <MenuItem value="zumba">zumba</MenuItem>
             </Select>
             <Button variant="contained" color="primary" type="submit">Submit</Button>
             </div>
            </form>
          
        </div>
        )
    )
}
}

export default UserDetailsForm
