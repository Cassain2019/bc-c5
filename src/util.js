//import React from 'react';
//import Numeral from 'numeral';
//import { Circle } from "react-leaflet";

// const casesTypeColors = {
    // cases: {
        // hex: "#CC1034",
        // rgb: "rgb(204, 16, 52)",
        // half_op: "rgb(204, 16, 52, 0.5)",
        // multiplier: 800,
    // },
    // recovered: {
        // hex: "#7dd71d",
        // rgb: "rgb(125, 215, 29)",
        // half_op: "rgb(125, 215, 29, 0.5)",
        // multiplier: 1200,
    // },
    // deaths: {
        // hex: "#fb4443",
        // rgb: "rgb(251, 68, 67)",
        // half_op: "rgb(251, 68, 67, 0.5)",
        // multiplier: 2000,
    // },
// };

export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if (a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;
} 

//Draw Circles on the Map
// export const showDataOnMap = (data, casesType = "cases") => (
    // data.map(country => (
        // <Circle
        // center={[country.countryInfo.lat, country.countryInfo.lng]}
        // fillOpacity={0.4}
        // color={casesTypeColors[casesType].hex}
        // fillColor={casesTypeColors[casesType].hex}
        // radius={
            // Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        // }
        // >
    // ))
// )