import React, { Fragment } from 'react'


export default class Sushi extends React.Component {
  constructor() {
    super()
    this.state = {
      eaten: false
    }
  }

  imageCleaner = (imageUrl) => {
    let name = imageUrl.split("img/")[1]
    if (name === undefined) {
      return require('../assets/RJGr3Xs.png')
    } else {
      return require(`../assets/${name}`)
    }
  }

  eatSushi = () => {
    if (this.state.eaten === false) {
      if (this.props.eatASushi(this.props.sushi)) {
        this.setState({
          eaten: true
        })

      }
    } else {
      null
    }
  }

  
  render() {
    console.log('WHYYY')
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.eatSushi}>
        { this.state.eaten === true ? null : <img src={this.imageCleaner(this.props.sushi.img_url)} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
  }
}