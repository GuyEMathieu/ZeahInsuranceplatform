import React, {useEffect} from 'react'
import DynamicTabs from '../components/DynamicTabs'

import CustomerSearch from './CustomerSearch';
import {useCustomer} from '../hooks/CustomHooks'

function CustomerMain() {

    const {customers, getCustomers} = useCustomer();

    useEffect(() => {
        if(!customers) getCustomers()
    }, [customers, getCustomers])

    const permTabs = [
        {
            label: 'Customers',
            child: () => <CustomerSearch customers={customers} />
        }
    ]
    return (
        <DynamicTabs  parents={permTabs}/>
    )
}

export default CustomerMain