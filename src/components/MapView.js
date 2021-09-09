import React, { useRef, useEffect, useState } from 'react'
import ArcGISMap from '../untils/ArcGISMap'

const MapView = ({ basemap, onClick }) => {
    const mapRef = useRef()
    const [view, setView] = useState(null)

    useEffect(() => {
        setView(ArcGISMap(basemap, mapRef.current));

        return () => { view && view.destroy() }
    }, [])

    useEffect(() => {
        if (!view) return
        view.map.basemap = basemap
    }, [view, basemap])

    // useEffect(() => {
    //     if (!view) return
    //     const handle = view.on('click', onClick)
    //     return () => { handle && handle.remove() }
    // }, [view, onClick])

    return (
        <div ref={mapRef} style={{ height: '100vh' }} />
    )
}

export default MapView