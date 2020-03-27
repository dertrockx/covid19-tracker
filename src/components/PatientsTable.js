import React from 'react'
import { Table } from "antd";


const PatientsTable = ({ data, columns }) => {
    const dataSource = data.map( (patient, index) => {
        return {
            key: index,
            ...patient
        }
    })
    return (
        <React.Fragment>
            <Table dataSource={dataSource} columns={columns} />
        </React.Fragment>
    )
}

PatientsTable.defaultProps = {
    columns: [
        {
            title: 'Case No.',
            dataIndex: 'case_no',
            key: 'caseNo'
        },
        {
            title: "Date",
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Sex',
            dataIndex: 'gender',
            key: 'sex'
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality'
        },
        {
            title: 'Hospital Admitted To',
            dataIndex: 'hospital_admitted_to',
            key:'hospital'
        },
        {
            title: 'Recently Travelled?',
            dataIndex: 'had_recent_travel_history_abroad',
            key: 'travelled'
        },
        {
            title: "Status",
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: "Other Information",
            key: 'other_info',
            dataIndex: 'other_information'
        }
    ]
}
export default PatientsTable;
