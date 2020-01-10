import React, { useRef, useEffect } from 'react'


let map

const MapComponent = ({ center }) => {

    const kakao = window.kakao

    const mapRef = useRef()

    const mapCenter = new kakao.maps.LatLng(center.lat, center.lng)

    if (map) {
        map.panTo(mapCenter)
    }


    const style = {
        width: "100vw",
        height: "30vh",
        backgroundColor: 'gray'
    }

    useEffect(() => {
        const mapOption = {
            center: new kakao.maps.LatLng(center.lat, center.lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }
        map = new kakao.maps.Map(mapRef.current, mapOption);
    }, [])



    return (
        <div ref={mapRef} style={style}>
            <h1>Map Div</h1>
        </div>
    )
}
export default MapComponent