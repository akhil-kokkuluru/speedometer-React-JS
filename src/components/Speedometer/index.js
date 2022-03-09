import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  plusButton = () => {
    const {count} = this.state
    console.log(count)
    if (count < 200) {
      this.setState(everyValue => ({count: everyValue.count + 10}))
    }
  }

  minusButton = () => {
    const {count} = this.state
    console.log(count)
    if (count > 0) {
      this.setState(everyValue => ({count: everyValue.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="ContentContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="imageCss"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speeding">Speed is {count}mph</h1>
        <p className="speedText">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="buttons" onClick={this.plusButton}>
            Accelerate
          </button>
          <button type="button" className="buttons2" onClick={this.minusButton}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
