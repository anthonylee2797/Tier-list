import React, { Component, createContext } from 'react';
import BoxComponent from './BoxComponent';
import Card from './Card';
import Storage from './Storage';



class Tiers extends Component {
  constructor(){
    super()
    this.state = {
      'storage': []
    }
    this.setTier = this.setTier.bind(this)
    this.reset = this.reset.bind(this)
  }


  async componentDidMount(){
    console.log('mounting')
    let response = await fetch('/getData')

    let data = await response.json()
    this.setState(() => {
      return {
        storage: data.storage
      }
    })

    // console.log('consoleloggin!',this.state.storage)

  }


  setTier(image, tier){
    const copy = this.state.storage
    copy.map((el) => {
      if (el.image === image){
        el.tier = tier
      }
    })
    this.setState(() => {
      return{
        storage: copy
      }
    })
  }

  reset(){
    const newCopy = this.state.storage;
    newCopy.map((el) => {
      el.tier = 'null'
    })
    this.setState(() => {
      return {
        storage: newCopy
      }
    })
  }
  
  render(){
    return (
   
      <div className='tiers-container'>
        <BoxComponent className='box' tier='A' setTier={this.setTier}>
            {this.state.storage.filter((el) => el.tier === 'A').map((el) => (
              <Card img={el.image} />
            ))}
        </BoxComponent>
        <BoxComponent className='box' tier='B' setTier={this.setTier}>
            {this.state.storage.filter((el) => el.tier === 'B').map((el) => (
              <Card img={el.image} />
            ))}
        </BoxComponent>
        <BoxComponent className='box' tier='C' setTier={this.setTier}>
            {this.state.storage.filter((el) => el.tier === 'C').map((el) => (
              <Card img={el.image} />
            ))}
        </BoxComponent>
        <BoxComponent className='box' tier='F' setTier={this.setTier}>
            {this.state.storage.filter((el) => el.tier === 'F').map((el) => (
              <Card img={el.image} />
            ))}
        </BoxComponent>
              <button className='reset-button' onClick={this.reset}>Reset</button>
        <Storage className='storage' tier='null' setTier={this.setTier}>
            {this.state.storage.filter((el) => el.tier === 'null').map((el) => (
              <Card img={el.image} />
            ))}
        </Storage>

        {/* <Storage tier='null'>{this.state.storage.filter((el) => el.tier === 'null').map((el) => (
          <Card img={el.image} />
        ))}</Storage> */}
        {/* <Storage  storage={this.state.storage}/> */}
     </div>
 
    )
  }
}

export default Tiers;
