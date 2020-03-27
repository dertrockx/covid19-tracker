import React, { Fragment } from 'react';
import Chart from "react-apexcharts";
import getSexRatio from "../../utils/getSexRatio";

const InfectionRate = ({ data }) => {
    // returns a fraction or ratio
    const { male, female } = getSexRatio( data );
    const options = {
        series: [ male, female ],
        chart: {
            type: 'donut'
        },
        labels: ['Male', 'Female'],
        colors: ['#0000FF', '#FF1493']
    }
    return (
        <Fragment>
            <Chart 
                options={ options } 
                type='donut' 
                series={ options.series } 
            />
        </Fragment>
    )
}

InfectionRate.defaultProps = {
    type: 'donut'
}

export default InfectionRate;