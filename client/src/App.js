import './App.css';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import CustomerSearch from './customers/CustomerSearch';
import CustomerMain from './customers/CustomerMain'
import Opportunity  from './customers/Opportunity';
import NewProspect from './NewProspect';


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
                            <Route path='/customers/:id/profile' element={<CustomerMain />} />
                            <Route path='/quotes' element={<Opportunity />} />
                        </Routes>
                    </Router>
                </CustomerState>
            </DefaultState>
        </ThemeProvider>
    );
}

export default App;
