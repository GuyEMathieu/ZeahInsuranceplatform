import './App.css';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import CustomerMain from './customers/CustomerMain'
// import CustomerSearch from './customers/CustomerSearch'
// import CustomerProfile from './customers/CustomerProfile'

import { lightTheme } from './themes/lightTheme';
import { ThemeProvider } from '@mui/material/styles';

import CustomerState from './context/customer/CustomerState';


function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CustomerState>
                {/* <MainContainer> */}
                <Router>
                    <Routes>
                        <Route path='/' element={<CustomerMain />} />
                    </Routes>
                </Router>
            </CustomerState>
        </ThemeProvider>
    );
}

export default App;
