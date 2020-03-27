import React, { useContext, useEffect } from 'react'

import AgeDemographics from "../Charts/AgeDemographics";
import InfectionRate from "../Charts/InfectionRate";
import HeatMap from "../Maps/HeatMap";

import CasesContext from "../../context/cases/casesContext";
import Spinner from "../Spinner/Spinner";
import { Row, Col, Typography, Card } from "antd";
import PatientsTable from "../PatientsTable";

const { Title } = Typography;

const CasesPH = () => {
    const casesContext = useContext(CasesContext);
    const { ph_cases, ph_loading, ph_last_updated, getPHCases } = casesContext;

    useEffect( () => {
        getPHCases();
    }, []);

    let content = null;
    if(ph_cases === null || ph_loading){
        content = <Spinner />
    } else {
        const last_updated = new Date(ph_last_updated * 1000)
        const total_cases = ph_cases.length;
        let total_recovered = 0, total_deaths = 0, total_admitted = 0, tba = 0;
        for(const patient of ph_cases){
            if(patient.status === "Died")
                total_deaths++;
            else if(patient.status === "Recovered")
                total_recovered++;
            else if(patient.status === "Admitted")
                total_admitted++;
            else
                tba++;
        }

        content = (
            <div className="content">
                <Row>
                    <Col>
                        <Title level={1}>
                            COVID-19 Status in the Philippines 
                        </Title>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Title level={3}>
                            Total Coronavirus Cases: { total_cases }
                        </Title>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Title level={3}>
                            Admitted: { total_admitted }
                        </Title>
                    </Col>
                    <Col span={6}>
                        <Title level={3} color="green-6">
                            Recovered: { total_recovered }
                        </Title>
                    </Col>
                    <Col span={6}>
                        <Title level={3}>
                            Deaths: { total_deaths }
                        </Title>
                    </Col>                    
                    <Col span={6}>
                        <Title level={3}>
                            TBA: { tba }
                        </Title>
                    </Col>                    
                </Row>
                <Row gutter={24}>
                    <Col span={16}>
                        <HeatMap
                            data={ph_cases}
                            />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card title="Infection Rate by Sex">
                            <InfectionRate 
                                data={ph_cases}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Age Demographics">
                            <AgeDemographics
                                data={ph_cases}
                                name='Infected'
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Title level={2}>
                            Table of Patients
                        </Title>
                        <PatientsTable
                            data={ph_cases}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
    return(
        <React.Fragment>
            { content }
        </React.Fragment>
    )
}
/*
class CasesPH extends React.Component {
    state = {
        options: {
            chart: {
                id: 'test-chart'
            },
            xaxis: {
                categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
            }
        },
        series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
        }],
        timerID: null
    }
    context = useContext(CasesContext);

    updateData() {
        this.setState({
            series: [{
            name: 'sales',
            data: this.state.series[0].data.map( data => {
                return Math.floor( Math.random() * 20); 
            })
            }]
        })
    }

    startTimer(){
        if( this.state.timerID !== null)
            this.stopTimer();
        const timerID = setInterval( () => this.updateData(), 1000 );
        this.setState({ timerID });
    }


    stopTimer() {
        if(this.state.timerID !== null){
            clearInterval(this.state.timerID);
            this.setState({ timerID: null });
        }
    }
    componentDidMount(){
        this.context.getPHCases();
        this.startTimer()
    }

    componentWillUnmount(){
        this.stopTimer();
    }   

    render() {
        return (
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
            />
        )
    }
}
*/
export default CasesPH;