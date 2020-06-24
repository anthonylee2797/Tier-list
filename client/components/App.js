import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import Tiers from './Tiers';
import { HTML5Backend } from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <div>
      <DndProvider backend={HTML5Backend} >
          <h1 className='margin-20'>Rank Your Favorite Netflix Shows</h1>
          <Tiers />
      </DndProvider>
      </div>
    );
  }
}

export default App;
