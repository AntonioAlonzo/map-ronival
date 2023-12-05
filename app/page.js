"use client";

import { useState, useRef, useMemo } from "react";
import {
  useLoadScript,
  GoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import markers from "./markers.js";
import DevelopmentModal from "./developmentmodal";
import "./App.css";

export default function Home() {
  const [showDetailWindow, setShowDetailWindow] = useState(false);
  const [infoWindowId, setInfoWindowId] = useState();
  const [mapRef, setMapRef] = useState();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBtDggy7VqA3j-kqHLpxYjkxgflvk4vW3c",
  });
  const center = useMemo(() => ({ lat: 20.310548, lng: -101.621259 }), []);

  const markerClickHandle = (lat, lng, markerId) => {
    mapRef?.panTo({ lat, lng });

    setInfoWindowId(markerId);
    setShowDetailWindow(true);
  };

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  let detailWindow = "";
  if (infoWindowId) {
    detailWindow = (
      <DevelopmentModal
        development={markers[infoWindowId]}
        showDetailWindow={showDetailWindow}
        setShowDetailWindow={setShowDetailWindow}
      ></DevelopmentModal>
    );
  }

  return (
    <>
      <div className="App">
        {!isLoaded ? (
          ""
        ) : (
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerClassName="map-container"
            center={center}
            zoom={6}
            options={{ mapId: "121ba671a2246103" }}
          >
            {markers.map((marker, index) => {
              return (
                <Marker
                  title="Marker"
                  key={index}
                  onClick={() => {
                    markerClickHandle(marker.lat, marker.lng, index);
                  }}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  icon={
                    "https://www.findmexicohouses.com/files/2023/11/marker-1ff244c13a9eb537141a493f7c1e4e6e6cd9294f.png"
                  }
                >
                  {showDetailWindow && infoWindowId == index && (
                    <InfoWindow>
                      <>{marker.name}</>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
          </GoogleMap>
        )}
      </div>

      {detailWindow}
    </>
  );
}
