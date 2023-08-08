// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangooseCount: 0,
    bananasCount: 0,
  }

  onClickEatMangoes = () => {
    this.setState(prevState => ({mangooseCount: prevState.mangooseCount + 1}))
  }

  onClickBananasCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangooseCount, bananasCount} = this.state
    return (
      <div className="app-fruit-container">
        <div className="fruit-container">
          <h1 className="heading">
            I ate <span className="count">0</span>Mangoes and
            <span className="count">0</span> Bananas
          </h1>
          <div className="fruit-counter-container">
            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMangoes}
                >
                  Eat Mangoes
                </button>
              </div>
            </div>

            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickBananasCount}
                >
                  Eat Mangoes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
