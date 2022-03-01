import React from 'react'
import DynamicTabs from '../components/DynamicTabs'

import CustomerSearch from './CustomerSearch';

function CustomerMain() {

    const permTabs = [
        {
            label: 'Customers',
            child: () => <CustomerSearch  />
        }
    ]
    return (
        <DynamicTabs  parents={permTabs}/>
    )
}

export default CustomerMain