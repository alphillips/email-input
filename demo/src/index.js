import React, {Component} from 'react'
import {render} from 'react-dom'

import EmailInput from '../../src'

class Demo extends Component {

  constructor(props) {
      super(props)
      this.state = {
        value:''
      }

  }
  onChange = (field) => {
    return (value) => {
      this.setState((prevState, props) => ({
        [field]: value
      }))
    }
  }

  render() {
    return (
    <div>
      <EmailInput
        label="Email address"
        id="email-address"
        value={this.state.value}
        onChange={this.onChange('value')}
      />
    </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
