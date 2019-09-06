import React from 'react';

import Chart from 'react-google-charts';

const GoogleChart = (props) => {

    return (
        <>
        <Chart
            width={'300px'}
            height={'100px'}
            chartType="LineChart"
            loader={<div>Loading Chart...</div>}
            data={props.searches}
            options={{
                hAxis: {
                title: 'Time',
                },
                vAxis: {
                title: 'Popularity',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
</>
    )
}

export default GoogleChart;