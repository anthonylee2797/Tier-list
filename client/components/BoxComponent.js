import React, { Component } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import  { Box } from '@chakra-ui/core'


const ItemTypes = {
  CARD:'card',
}

const BoxComponent = props => {

  // const { setTier } = useContext(CardContext)
  const [{ isOver }, drop, drop1] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => 

    props.setTier(item.image,props.tier),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }) 

  return (
    <div className='box'>
      <Box className='box' ref={drop} style={{backgroundColor: isOver ? "#2E4053" : '#154360'}}  w="100%" p={2} color="black"><h1 className='test'>{props.tier} {props.children}</h1></Box>
    </div>
  )
}

export default BoxComponent;
