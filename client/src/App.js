import './App.css';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import CustomerSearch from './customers/CustomerSearch';
import CustomerProfile from './customers/CustomerProfile'
import Opportunity  from './quoting/Opportunity';



import { lightTheme } from './themes/lightTheme';
import { ThemeProvider } from '@mui/material/styles';

import CustomerState from './context/customer/CustomerState';
import DefaultState from './context/defaults/DefaultState';



function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <DefaultState>
                <CustomerState>
                    <Router>
                        <Routes>
                            <Route path='/' element={<CustomerSearch />} />
                            <Route path='/customers/profile/:id' element={<CustomerProfile />} />
                            <Route path='/quotes' element={<Opportunity />} />
                        </Routes>
                    </Router>
                </CustomerState>
            </DefaultState>
        </ThemeProvider>
    );
}

export default App;
