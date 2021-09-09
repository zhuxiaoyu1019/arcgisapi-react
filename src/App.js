import React, { useState } from 'react'
import './App.css';
import MapView from './components/MapView';
import BaseMapSelect from './components/BaseMapSelect'

const App = () => {
  const [basemap, setBasemap] = useState('topo-vector')

  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div className="App">
      <MapView basemap={basemap} onClick={onClick} />
      <BaseMapSelect basemap={basemap} setBasemap={setBasemap} />
    </div>
  );
}

export default App
