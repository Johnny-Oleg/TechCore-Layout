import Folder from '../pages/Folder/Folder';
import Home from '../pages/Home/Home';
import Settings from '../pages/Settings/Settings';
import Users from '../pages/Users/Users';
import Vacation from '../pages/Vacation/Vacation';

export const routes = [
    { path: 'dashboard', component: <Home /> },
    { path: 'folder', component: <Folder /> },
    { path: 'settings', component: <Settings /> },
    { path: 'users', component: <Users /> },
    { path: 'vacation', component: <Vacation /> },
]