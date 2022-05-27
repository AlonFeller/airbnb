import React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export const StayMap = ({stay}) => {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: stay.address.location.lat,
        lng: stay.address.location.lan
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDIUJQYx31SYLYOJV8m2y-6F3QjobNIp4U"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}
