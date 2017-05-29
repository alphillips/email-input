import React from 'react'
import Input from '@react-ag-components/input'

class EmailInput extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
      }
  }

  checkValidity = (val) => {
    let valid = val.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(valid === 0){
      this.setState({error: ''})
      return true
    } else {
        this.setState((prevState, props) => ({
          error:'Enter a valid email address'
        }))
      return false
    }
  }

  onBlur = (value) => {
    this.checkValidity(value)
  }

  onChange = (value) => {
    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div>
        <Input
          type="email"
          error={this.state.error}
          onBlur={this.onBlur}
          onChange={this.onChange}
          {...this.props}
        />
      </div>
    )
  }
}
export default EmailInput
