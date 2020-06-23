import React, { Component, createContext } from 'react';
import BoxComponent from './BoxComponent';
import Card from './Card';
import Storage from './Storage';



class Tiers extends Component {
  constructor(){
    super()
    this.state = {
      'storage': [{'image': '/cs.png' ,'tier': null},{'image': '/fsa.png','tier': null} ]
    }
    this.setTier = this.setTier.bind(this)
  }


  setTier(image, tier){
    console.log(image, tier)
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


        <Storage  storage={this.state.storage}/>
     </div>
 
    )
  }
}

export default Tiers;
