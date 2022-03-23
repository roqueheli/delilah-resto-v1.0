import React, { useContext, useState, useCallback, useRef } from 'react';
import { MainContext } from '../../context/mainContext';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Locate from './Locate';
import Search from './Search';
// import '@reach/combobox/styles.css';
import '../../styles/addaddresses.scss';

function ModalAddAddress() {
    const { setAddAddress, mapContainerStyle, center, options, isLoaded, loadError } = useContext(MainContext);
    const [ marker, setMarker ] = useState([]);

    const onMapClick = useCallback((event) => { setMarker(() => [{ lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date() }])}, []);
    const mapRef = useRef();

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "";
    if (!isLoaded) return "";

    return (
        <article className='modal is-open' onClick={() => setAddAddress(false)}>
            <div className='modal-container modal_cart' onClick={(e) => e.stopPropagation()} >
                <button onClick={() => setAddAddress(false)} className='modal-close'>X</button>
                <h1>Agrega tu dirección</h1>
                <div className='addaddresses_container'>
                    <Search panTo={panTo}/>
                    <Locate panTo={panTo}/>
                    <GoogleMap onLoad={onMapLoad} onClick={onMapClick} mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options}>
                        {marker.map((marker) => <Marker key={marker.time.toISOString()} position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }} />)}
                    </GoogleMap>
                    <div className='addresses_footer'>
                        <button>AGREGAR</button>
                    </div>
                </div>
            </div>
        </article>
  )
}

export default ModalAddAddress;