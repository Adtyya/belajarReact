import React from 'react';
import ReactDOM from 'react-dom';
import Homes from './Home/Homes';
import reportWebVitals from './reportWebVitals';

// CATATAN PENTING
// Nama export harus sama dengan nama const/variable
// ()=> sama saja dengan function *misal (a, b)
// Nama class harus diawali dengan huruf kapital

ReactDOM.render(<Homes />,document.getElementById('root')
);

reportWebVitals();



