import React from 'react';

const payloadsList = (props) => {
    const fields = props.payloadFields.map(payloadField => {
        return (<tr key={payloadField.name}>
            <td>{payloadField.name}</td>
            <td>{payloadField.type}</td>
            <td>{payloadField.description}</td>
        </tr>);
    });

    return (<div>
        <h4>Sample Payload for {props.name}</h4>
        <p>{JSON.stringify(props.payloadSample, null, 2)}</p>
        <p>Fields</p>
        <table className='table'>
            <thead>
            <tr>
                <th>Field Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {fields}
            </tbody>
        </table>
    </div>);
};

export default payloadsList;