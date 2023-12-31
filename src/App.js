import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import TrafficMap from './components/trafficmap/TrafficMap';
import TrafficMapTile from './components/TrafficMapTile/TrafficMapTile';
import Map from './components/map/Map';
import MapDetails from './components/leafletMap/LeafletMap';
import TrafficFlow from './components/trafficFlow/TrafficFlow'
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import TomTomMap from './components/leafletMap/LeafletMap';
import LeafletMap from './components/leafletMap/LeafletMap';
import ReportFrom from './components/reportForm/ReportFrom';


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Map/>} />
      <Route path="/flowData" element={<LeafletMap/>} />
      <Route path="/routing" element={<TrafficMap/>} />
      <Route path='/report' element={<ReportFrom/>}/>
      </Routes>
    </Router>
  );
}

export default App;
