import React from 'react';
import PayloadsList from './PayloadsList/PayloadsList';

const parameterList = (props) => {
    const params = props.parameters.map(param => {
        return (<tr key={param.name}>
            <td>{param.name}</td>
            <td>{param.type}</td>
            <td>{param.description}</td>
        </tr>);
    });

    const paramsWithSamplePayloads = props.parameters.filter(param => {
        return param.hasOwnProperty('payloadSample') && param.hasOwnProperty('payloadFields');
    });

    const samplePayloads = paramsWithSamplePayloads.map(param => {
        return <PayloadsList key={param.name} name={param.name} payloadSample={param.payloadSample} payloadFields={param.payloadFields}/>;
    });

    return (
        <div>
            <table className='table'>
                <thead>
                <tr>
                    <th>Parameter Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {params}
                </tbody>
            </table>
            {samplePayloads}
        </div>
    );

};

export default parameterList;