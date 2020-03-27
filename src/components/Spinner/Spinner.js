import { Spin } from 'antd';
import React from 'react'
import './Spinner.css';

const Spinner = () => {
    return(
        <div className="spinner-container">
            <Spin size="large" />
            <br />
            <h1>Retrieveing Data...</h1>
        </div>
    )
}

export default Spinner;