import React, {useEffect, useState} from 'react'
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
            child: () => <CustomerSearch customers={customers} createCustomerTab={createCustomerTab}/>
        }
    ]

    const [children, setChildren] = useState(null)

    const createCustomerTab = customer => {
        const child = {
            label: `${customer.first_name} ${customer.last_name}`,
            child: () => <div> hello</div>
        }

        if(children.find(c => c.label !== child.label)){
            setChildren([...children || [], child])
        }

        
    }

    return (
        <DynamicTabs parents={permTabs} children={children}/>
    )
}

export default CustomerMain