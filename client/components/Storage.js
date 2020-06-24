import { DndProvider, useDrag, useDrop } from 'react-dnd';
import  { Box } from '@chakra-ui/core'
import React, { Component } from 'react';


const ItemTypes = {
  CARD:'card',
}

const Storage = props => {

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
    <div className='storage'>
      <Box  ref={drop} style={{backgroundColor: isOver ? "#ABABAB" : '#f5f5f1', borderRadius: 20, height: 300}}  w="100%" p={0} color="black"><h1 className='tests'>{props.children}</h1></Box>
    </div>
  )
}

export default Storage;

// class Storage extends Component {
//   render(){
//     let array = []
//     this.props.storage.forEach((icon) => {
//       array.push(<Card className='card' img={icon.image}/>)
//     })
//     return (
//       <div className='storage'>
//       {array}
//       </div>
//     )
//   }
// }

// export default Storage;