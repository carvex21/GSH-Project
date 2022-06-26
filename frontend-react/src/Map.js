import { MapContainer, TileLayer, LayersControl, ZoomControl, GeoJSON, Popup, Marker} from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css';
import {LineJSON} from './GeoJSON/Line';
import {RectangleJSON} from './GeoJSON/Rectangle';
import {MultipointJSON} from './GeoJSON/Multipoint';
import {PolygonJSON} from './GeoJSON/Polygon';
import axios from 'axios';
import { useState } from 'react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

{/* so that the marker icon is shown */}

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;






const {BaseLayer} = LayersControl;

function Map() {
    const [number, setNumber] = useState(null)
    const [layer, setLayer] = useState(null)
    function getData(layer) {
        axios({
          method: "GET",
          url:`/layernumber?layer=${layer}`,
        })
        .then((response) => {
        const res =response.data
        setNumber(
            res.layernumber
        )
        
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
        
    }

    const onEachFeature = (feature, layer) => {
        layer.on({
          click: clickToFeature.bind(this)
        });
        // console.log(layer)
        
      }
    
    const clickToFeature = (e) => {        
        var layer = e.target.options.name;

        // fixing the "undefined" error
        if (layer == null){
            layer = e.target.options.alt;
        }

        setLayer(layer);
        getData(layer);
        console.log(e.target.options)
     }


    return (
        
        <div className='mapwrapper'>
            <MapContainer className='map' center={[41.137, 24.89]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
                <ZoomControl position="bottomleft" />

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* baseMaps */}
                <LayersControl position="topright">
                    <BaseLayer checked name="Alpha">
                        <TileLayer
                            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
                        />
                    </BaseLayer>
                    <BaseLayer name="Bravo">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <BaseLayer name="Charlie">
                        <TileLayer
                            attribution='© OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom='19'
                        />
                    </BaseLayer>
                    
                    <BaseLayer name="Delta">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                        />
                    </BaseLayer>

                    {/* Layers */}
                    <LayersControl.Overlay checked name="Line">
                        <GeoJSON name="Line" onEachFeature={onEachFeature} data={LineJSON}>
                            <Popup>
                                {number} {layer}
                            </Popup>
                        </GeoJSON>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Polygon">
                        <GeoJSON name="Polygon" onEachFeature={onEachFeature} data={PolygonJSON}>
                            <Popup>
                                {number} {layer}
                            </Popup>
                        </GeoJSON>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Multipoint">
                        {/* is not working for some reason, cannot get the layer name properly */}
                        <GeoJSON name="Multipoint" onEachFeature={onEachFeature} data={MultipointJSON}> 
                            <Popup>
                                {number} {layer}
                            </Popup>
                        </GeoJSON>
                    </LayersControl.Overlay>
                    
                    <LayersControl.Overlay checked name="Rectangle">
                        <GeoJSON name="Rectangle" onEachFeature={onEachFeature} data={RectangleJSON}>
                            <Popup>
                                {number} {layer}
                            </Popup>
                        </GeoJSON>
                    </LayersControl.Overlay>1
                </LayersControl>
            </MapContainer>
        </div>
    )
}

export default Map