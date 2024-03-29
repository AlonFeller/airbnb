import React, {useState} from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export const StayMap = ({stay}) => {

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: stay.address.location.lan,
        lng: stay.address.location.lat
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBc6B28HMUZ02judRVCIxcRZkznBQ7AFgk"
    })

    const [map, setMap] = React.useState(null)

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            // onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

