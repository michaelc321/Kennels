import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    const [Customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/Customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomers = Customer => {
        return fetch("http://localhost:8088/Customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Customer)
        })
            .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `Customers` state, the `addCustomer` function,
        and the `getCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            Customers, addCustomers, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}