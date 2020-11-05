/// app.js
import React from 'react';
import DeckGL from "@deck.gl/react";
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {StaticMap} from 'e:/Programs/SAH/initial_js_map/node_modules/react-map-gl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoicm9vY3BzcCIsImEiOiJjazRudTlmdG4zNm03M2tvNnVibXl4NHA3In0.anHMyBy0bWkBW_48FnNpng';

// Initial viewport settings
const initialViewState = {
  longitude: -0.10763699999999997,
  latitude: 51.517831,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = 'http://127.0.0.1:8887/crimeData_2011.json';

export default class LayeredMap extends React.Component {
  render() {
    const layers = new HexagonLayer({
      id: 'hexagon-layer',
      data,
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 20,
      getPosition: d => [d.Longitude,d.Latitude],
      
    });

    return (
      <React.Fragment>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
      </React.Fragment>
    );
  }
}
