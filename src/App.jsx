import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppWrapper from './components/AppWrapper/AppWrapper';
import AppRouter from './components/AppRouter';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';
import Folder from './pages/Folder/Folder';
import Vacation from './pages/Vacation/Vacation';
import SubMenu from './components/ui/SubMenu/SubMenu';
import General from './pages/General/General';
import VacationManager from './pages/VacationManager/VacationManager';
import LeaveTypes from './pages/LeaveTypes/LeaveTypes';
import Locations from './pages/Locations/Locations';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <AppRouter />
                {/* <Routes>
                    <Route path="/" element={<AppWrapper />}> */}
                        {/* <Route path="dashboard/*" element={<Home />}>
                            <Route path="general" element={<General />} />
                            <Route path="manager/*" element={<VacationManager />}>
                                <Route  path="types" element={<LeaveTypes />}/>
                                <Route  path="locations" element={<Locations />}/>
                            </Route>
                        </Route>
                        <Route path="users/*" element={<Users />}>
                            <Route path="general" element={<General />} />
                            <Route path="manager/*" element={<VacationManager />}>
                                <Route path="types" element={<LeaveTypes />} />
                                <Route path="locations" element={<Locations />} />
                            </Route>
                        </Route>
                        <Route path=":settings/*" element={<Settings />}>
                            <Route path="general" element={<General />} />
                            <Route path="manager/*" element={<VacationManager />}>
                                <Route path="types" element={<LeaveTypes />} />
                                <Route path="locations" element={<Locations />} />
                            </Route>
                        </Route>
                        <Route path="folder/*" element={<Folder />}>
                            <Route path="general" element={<General />} />
                            <Route path="manager/*" element={<VacationManager />}>
                                <Route path="types" element={<LeaveTypes />} />
                                <Route path="locations" element={<Locations />} />
                            </Route>
                        </Route>
                        <Route path="vacation/*" element={<Vacation />}>
                            <Route path="general" element={<General />} />
                            <Route path="manager/*" element={<VacationManager />}>
                                <Route path="types" element={<LeaveTypes />} />
                                <Route path="locations" element={<Locations />} />
                            </Route>
                        </Route> */}
                    {/* </Route>
                </Routes> */}
            </div>
        </div>
    )
}

export default App;