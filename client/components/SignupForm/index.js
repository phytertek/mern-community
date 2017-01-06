import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'

import timezones from '../../data/timezones'


import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


import { signup } from '../../../server/shared/validations'

const style = {
  paper: { padding: 15 },
  header: { textAlign: 'center', color: 'black' },
  container: { padding: 15 },
  select: { width: '100%' }
}

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',         email: '',      password: '',
      confirmPassword: '',  timezone: '',   errors: {},           
      isLoading: false
    }
    this.onChange           =   this.onChange.bind(this)
    this.onChangeTimezone   =   this.onChangeTimezone.bind(this)
    this.onSubmit           =   this.onSubmit.bind(this)
  }

  onChange(e, k, p) {
    this.setState({ [e.target.id]: e.target.value })
  }

  onChangeTimezone(e, k, p) {
    this.setState({ timezone: p})
  }

  isValid() {
    const { errors, isValid } = signup.validateInput(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.userSignupRequest(this.state).then((res) => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Ҏ Ҥ ¥ Ț Ӭ Ԇ Ŧ Ξ Ҝ'
        })
        this.context.router.push('/')
      }).catch(err => {
        this.setState({ errors: err.response.data, isLoading: false })
      })
    }
  }

  showState() {
    console.log(this.state)
  }

  render() {
    const menuItems = timezones.map((tz, i) => {
      return (
        <MenuItem key={i} 
                  value={tz.value} 
                  primaryText={tz.value}/>
      )
    })
    return (
      <div style={style.container}>
      <Paper zDepth={3} style={style.paper}>
      <form>
      <h1 className="font-effect-3d-float" style={style.header}>Ҏ Ҥ ¥ Ț Ӭ Ԇ Ŧ Ξ Ҝ</h1>

      {/*Username*/}  
      <TextField  hintText="phytertek" 
                  errorText={this.state.errors.username} 
                  floatingLabelText="Ц δ Ξ я Ӣ Λ Ӎ ℓ" 
                  fullWidth={true}
                  value={this.state.username} 
                  onChange={this.onChange} 
                  id="username"
                  className="font-effect-3d-float"/>    
      {/*Email*/}
      <TextField  errorText={this.state.errors.email} 
                  floatingLabelText="Ӭ ӎ Ѧ ị Ŀ" 
                  fullWidth={true}
                  value={this.state.email} 
                  onChange={this.onChange} 
                  id="email"
                  className="font-effect-3d-float"/>
      
      {/*Password*/}
      <TextField  errorText={this.state.errors.password} 
                  type="password" 
                  floatingLabelText="ρ д § Щ Ѻ г Đ" 
                  fullWidth={true}
                  value={this.state.password} 
                  onChange={this.onChange} 
                  id="password"
                  className="font-effect-3d-float"/>
        
      {/*Password Confirmation*/}
      <TextField  errorText={this.state.errors.confirmPassword} 
                  type="password" 
                  floatingLabelText="Ҁ θ Π Ӻ Ị Я ḿ _  ρ д § Щ Ѻ г Đ" 
                  fullWidth={true}
                  value={this.state.confirmPassword} 
                  onChange={this.onChange} 
                  id="confirmPassword"
                  className="font-effect-3d-float"/>
      
      {/*Timezone*/}
      <SelectField  id="timezone"
                    errorText={this.state.errors.timezone} 
                    floatingLabelText="Ԏ ỉ Ӎ € ζ ф Ԉ Ҽ" 
                    fullWidth={true}
                    value={this.state.timezone} 
                    onChange={this.onChangeTimezone}
                    className="font-effect-3d-float">
                    {menuItems}
      </SelectField>

      <div style={style.container}>
        <RaisedButton name="submit" 
                      disabled={this.state.isLoading}
                      label="§ ї Ԍ ∏ _ ц ҏ" 
                      fullWidth={true} 
                      onTouchTap={this.onSubmit}/>
      </div>

      </form>
      </Paper>
      </div>

    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm