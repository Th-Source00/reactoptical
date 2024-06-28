import React, { useEffect } from 'react';
import $ from 'jquery';
import 'morris.js/morris.css';
import 'morris.js/morris.js';

export default function MorrisDonut() {
    useEffect(() => {
        let chartInstance = null;

        $(function () {
            // Clean up previous instances
            if (chartInstance) {
                chartInstance.destroy();
            }

            // Morris.js donut chart configuration
            chartInstance = Morris.Donut({
                element: 'morris-donut-chart',
                data: [
                    { label: 'Prescriptions', value: 12 },
                    { label: 'Diagnostics', value: 30 },
                    { label: "Doctor's report", value: 20 }
                    // Add your data here
                ],
                colors: ['#4CAF50', '#FFC107', '#2196F3']
            });
        });

        // Clean up on component unmount
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div id="morris-donut-chart" style={{ width: '90%', height: '250px' }}></div>
    );
}
