/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Chart from './Chart';

const LineGraph = () => {
  const [csv, setCsv] = useState('');
  const [columns, setColumns] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const csvToJson = (csv) => {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1;i < lines.length;i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0;j < headers.length;j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return JSON.stringify(result);
  };

  const handleProcess = () => {
    const result = csvToJson(csv);
    setData(JSON.parse(result));
    const columns = Object.getOwnPropertyNames(JSON.parse(result)[0]);
    setColumns(columns);
  };

  const handleApply = () => {
    setShow(true);
  };

  return (

    <div className='row'>

      <div className='col-md-6'>
        <h2>Line graph component</h2>
        <p>Example: </p>
        <p>
          date,amount,spent
          <br />
          2019-01-01,10,100
          <br />
          2019-01-01,20,200
        </p>
        <div className='form-group'>
          <textarea
            className='form-control'
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            rows='4'
            cols='50'
            placeholder='Paste simple csv here'
          >
            Paste your simple CSV here...
          </textarea>
        </div>

        <button className='btn btn-primary' type='button' onClick={handleProcess}>Process</button>
        <br />
      </div>
      <div className='col-md-6'>

        {
          columns.length > 0 && (
            <>

              <div className='form-group'>
                <label htmlFor='x'>X Axis</label>
                <select
                  id='x-axis'
                  value={xAxis}
                  onChange={(e) => {
                    setShow(false);
                    setXAxis(e.target.value);
                  }}
                  className='form-control'
                >
                  <option>Select</option>
                  {
                    columns.map((col, i) => <option key={i} value={col}>{col}</option>)
                  }
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='x'>Y Axis</label>
                <select
                  id='y-axis'
                  value={yAxis}
                  onChange={(e) => {
                    setShow(false);
                    setYAxis(e.target.value);
                  }}
                  className='form-control'
                >
                  <option>Select</option>
                  {
                    columns.map((col, i) => <option key={i} value={col}>{col}</option>)
                  }
                </select>
              </div>

              <br />
              <button className='btn btn-primary' type='button' onClick={handleApply}>Apply</button>
            </>
          )
        }
      </div>

      <div className='col-md-12'>

        {
          show && <Chart data={data} xAxis={xAxis} yAxis={yAxis} />
        }
      </div>

    </div>
  );
};

export default LineGraph;
