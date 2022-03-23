import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { Combobox, ComboboxOption, ComboboxList, ComboboxPopover, ComboboxInput } from '@reach/combobox';
import '@reach/combobox/styles.css';
import '../../styles/addaddresses.scss';

function Search({ panTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions, getGeocode, getLatLng, isLoaded, loadError } = useContext(MainContext);

    if (loadError) return "";
    if (!isLoaded) return "";

    return (
        <div className='Combobox_'>
            <Combobox onSelect={ async (address) => {
                setValue(address, false);
                clearSuggestions();
                try {
                    const results = await getGeocode({address});
                    console.log(results);
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo({ lat, lng });
                } catch (error) {
                    console.log(error);
                }
            }}>
                <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} placeholder='Ingresa tu dirección' />
                <ComboboxPopover>
                    <ComboboxList>
                        { status === 'OK' && data.map(({ id, description }) => (<ComboboxOption key={id} value={description} />))}    
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
  )
}

export default Search;