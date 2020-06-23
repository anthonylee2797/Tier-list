import React, { Component, createContext } from 'react';
import Card from './Card';


class Storage extends Component {
  render(){
    let array = []
    this.props.storage.forEach((icon) => {
      array.push(<Card img={icon.image}/>)
    })
    return (
      <div className='storage'>
      {array}
      </div>
    )
  }
}

export default Storage;
