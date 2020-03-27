import Chart from "react-apexcharts";
import React, { useEffect, useContext, useState } from 'react';
import getAgeDemo from "../../utils/getAgeDemo";
import PropTypes from 'prop-types';

const AgeDemographics = ({ data, id, type, width, name }) => {
    const ageDemo = getAgeDemo(data);
    const options = {
        chart: {
            id
        },
        xaxis: {
            categories: Object.keys(ageDemo)
        }
    } 
    const series =  [{
        name,
        data: Object.values(ageDemo)
    }]
    
    return(
        <React.Fragment>
            <Chart
                options={options}
                series={series}
                type={type}
                width={width}
            />
        </React.Fragment>
    )
    
   
   
}
AgeDemographics.defaultProps = {
    id: 'age-demographics',
    type: 'bar',
    width: 450,
}
export default AgeDemographics;