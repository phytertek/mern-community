import React, { Component } from 'react'
import axios from 'axios'

import map from 'lodash/map'

import timezones from '../../data/timezones'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const style = {
  paper: {
    padding: 15
  },
  container: {
    padding: 15
  },
  select: {
    width: '100%'
  }
}

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      timezone: '',
      errors: {},
      isLoading: false
    }
    this.onChange           =   this.onChange.bind(this)
    this.onChangeTimezone   =   this.onChangeTimezone.bind(this)
    this.onSubmit           =   this.onSubmit.bind(this)
  }

  onChange(e, k, p) {
    console.log(e.target,k,p)
    this.setState({ [e.target.id]: e.target.value })
  }

  onChangeTimezone(e, k, p) {
    this.setState({ timezone: p})
  }

  onSubmit(event) {
    this.setState({ errors: {}, isLoading: true })
    event.preventDefault()
    console.log(this.state)
    this.props.userSignupRequest(this.state)
    .then((res) => {
      console.log(res)
      this.setState({ errors: {}, isLoading: false })
    })
    .catch(err => this.setState({ errors: err.response.data })    )
    // axios.post('/api/user', { user: this.state })
  }

  showState() {
    console.log(this.state)
  }

  render() {
    const menuItems = timezones.map((tz, i) => <MenuItem id="timezone" key={i} value={tz.value} primaryText={tz.value}/>)
    return (
      <div style={style.container}>
      <Paper zDepth={3} style={style.paper}>
      <form>
      <h1>Join our Community!</h1>

      {/*Username*/}  
      <TextField  hintText="phytertek" 
                  errorText={this.state.errors.username} 
                  floatingLabelText="username" 
                  fullWidth={true}
                  value={this.state.username} 
                  onChange={this.onChange} 
                  id="username"/>
      
      {/*Email*/}
      <TextField  errorText={this.state.errors.email} 
                  floatingLabelText="email" 
                  fullWidth={true}
                  value={this.state.email} 
                  onChange={this.onChange} 
                  id="email"/>
      
      {/*Password*/}
      <TextField  errorText={this.state.errors.password} 
                  type="password" 
                  floatingLabelText="password" 
                  fullWidth={true}
                  value={this.state.password} 
                  onChange={this.onChange} 
                  id="password"/>
        
      {/*Password Confirmation*/}
      <TextField  errorText={this.state.errors.confirmPassword} 
                  type="password" 
                  floatingLabelText="confirm password" 
                  fullWidth={true}
                  value={this.state.confirmPassword} 
                  onChange={this.onChange} 
                  id="confirmPassword"/>
      
      {/*Timezone*/}
      <SelectField  id="timezone"
                    errorText={this.state.errors.timezone} 
                    floatingLabelText="timezone" 
                    fullWidth={true}
                    value={this.state.timezone} 
                    onChange={this.onChangeTimezone}>
                    {menuItems}
      </SelectField>

      <div style={style.container}>
        <RaisedButton name="submit" 
                      disabled={this.state.isLoading}
                      label="Sign Up" 
                      primary={true} 
                      fullWidth={true} 
                      onTouchTap={this.onSubmit}/>
      </div>

      <div style={style.container}>
        <RaisedButton name="showstate" 
                      label="show state"
                      primary={true} 
                      fullWidth={true} 
                      onTouchTap={this.showState.bind(this)}/>
      </div>

      </form>
      </Paper>
      </div>

    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm