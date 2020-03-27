import React, { Component } from 'react';
import reverseGeocoder from "../../utils/reverseGeocoder";
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from 'react-mapbox-gl';
import "./Map.css"
// mapboxgl.accessToken = 'pk.eyJ1IjoiZGVydHJvY2t4IiwiYSI6ImNrMXcwZHB0bjBmb2gzY216ODA0NDZ3MWsifQ.IoDpTejvyHpWvvj_cjjRlw';

const HeatMap = (props) => {
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoiZGVydHJvY2t4IiwiYSI6ImNrMXcwZHB0bjBmb2gzY216ODA0NDZ3MWsifQ.IoDpTejvyHpWvvj_cjjRlw'
    })
    const zoom = [3]
    const symbolLayout = {
        'text-field': '{title}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top'
    }
    const symbolPaint = {
        'text-color': 'white'
    }
    const circleLayout = {
        visibility: 'visible'
    }
    const circlePaint = {
        'circle-color': 'red'
    }
    const geoJSON = {
        "features": [
          {
            "type": "Feature",
            "properties": {
              "title": "Lincoln Park",
              "description": "A northside park that is home to the Lincoln Park Zoo"
            },
            "geometry": {
              "coordinates": [-87.637596, 41.940403],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Burnham Park",
              "description": "A lakefront park on Chicago's south side"
            },
            "geometry": {
              "coordinates": [-87.603735, 41.829985],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Millennium Park",
              "description": "A downtown park known for its art installations and unique architecture"
            },
            "geometry": {
              "coordinates": [-87.622554, 41.882534],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Grant Park",
              "description": "A downtown park that is the site of many of Chicago's favorite festivals and events"
            },
            "geometry": {
              "coordinates": [-87.619185, 41.876367],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Humboldt Park",
              "description": "A large park on Chicago's northwest side"
            },
            "geometry": {
              "coordinates": [-87.70199, 41.905423],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Douglas Park",
              "description": "A large park near in Chicago's North Lawndale neighborhood"
            },
            "geometry": {
              "coordinates": [-87.699329, 41.860092],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Calumet Park",
              "description": "A park on the Illinois-Indiana border featuring a historic fieldhouse"
            },
            "geometry": {
              "coordinates": [-87.530221, 41.715515],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Jackson Park",
              "description": "A lakeside park that was the site of the 1893 World's Fair"
            },
            "geometry": {
              "coordinates": [-87.580389, 41.783185],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Columbus Park",
              "description": "A large park in Chicago's Austin neighborhood"
            },
            "geometry": {
              "coordinates": [-87.769775, 41.873683],
              "type": "Point"
            }
          }
        ],
        "type": "FeatureCollection"
      }   
    return(
        <Map
            style='mapbox://styles/mapbox/dark-v10'
            containerStyle={{
                height: '500px',
                width: '500px'
            }}
            center={[-87.530221, 41.715515]}
            zoom={zoom}
        >
            {
                /* 
                <Layer
                    type="symbol" 
                    id="marker" 
                    layout={{ 'icon-image': 'marker-15' }}
                >
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                </Layer>
                */
            }
            <GeoJSONLayer 
                data={geoJSON}
                circleLayout={circleLayout}
                circlePaint={circlePaint}
                symbolLayout={symbolLayout}
                symbolPaint={symbolPaint}
            />
        </Map>
    )
}


/*
class HeatMap extends Component {
    state = {
        locations: [],
        center: {
            lat: 14.58012,
            long: 121.02225
        }, 
        zoom : 4
    }
    componentDidMount() {
        console.log(this.props.data)
        reverseGeocoder('Research Institute for Tropical Medicine')
            .then( (res) => this.setState({ locations: [...this.state.locations, res.data[0] ] }));
        const map = new mapboxgl.Map({
            height: '100vh',
            width: '100vw',
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.state.center.long, this.state.center.lat],
            zoom: this.state.zoom
        })
        map.on('load', () => map.resize() );
    }
    render() {
        return (
            <div className="mapContainer">
                <div ref={ el => this.mapContainer = el } className="mapbox-map">
                </div>
            </div>
        )
    }
}
*/
export default HeatMap;