import React, { Component } from 'react'

class ClickityClick extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = (event) => {
    this.setState({
      hasBeenClicked: true
    })
  }

  render() {
    return (
      <div>
        <p>I have{this.state.hasBeenClicked ? null : ' not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default ClickityClick
