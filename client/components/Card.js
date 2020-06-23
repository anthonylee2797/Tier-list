import React, { Component, createContext } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  CARD:'card',
}

const Card = props => {
  const [{isDragging}, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      image: props.img
    }, collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });


  return (
    <span className='card' ref={drag} style={{opacity: isDragging ? '0.5' : '1' }} >
    {/* props.img */}
        <img src={props.img}></img>
    </span>
  )
}

export default Card;
