import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './components/AppRouter';
import { fetchLocations } from './redux/reducers/locations/locationsSlice';
import { data } from './db/database.js';
import './App.css';

const App = () => {
    const [locations, setLocations] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const fetchData = () => {
                dispatch(fetchLocations(data));
            }

            fetchData();
        } catch (error) {
            console.log(error);
        }
    
      return () => {
        console.log('locations =>', data);
      }
    }, [data])
    

    return (
        <div className="app">
            <div className="container">
                <AppRouter />
            </div>
        </div>
    )
}

export default App;