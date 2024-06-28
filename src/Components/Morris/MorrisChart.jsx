import React, { useEffect } from 'react';
import $ from 'jquery';
import 'morris.js/morris.css';
import 'morris.js/morris.js';

const MorrisChart = () => {
  useEffect(() => {
    $(function () {
      // Morris.js chart configuration
      Morris.Line({
        element: 'graph-placeholder', // Use the correct element ID
        data: [
          { y: '2014', a: 50, b: 90 },
          { y: '2015', a: 65, b: 75 },
          // Add your data here
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
      });
      // ==========================
      // Morris.Donut({
      //   element: 'graph-placeholder', // Use the same element ID
      //   data: [
      //     { y: '2014', a: 50, b: 90 },
      //     { y: '2015', a: 65, b: 75 },
      //     // Add your data here
      //   ],
      //   resize: true
      // });
    });
  }, []);

  return (
    <div id="graph-placeholder" style={{ width: '90%', height: '250px' }}></div>
  );
};

export default MorrisChart;
