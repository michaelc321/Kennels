import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { Customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Customer state changed.
    */
    useEffect(() => {
        console.log("CustomerList: Customer state changed")
        console.log(Customers)
    }, [Customers])

    return (
        <div className="customers">
        {
            Customers.map(loc => <Customer key={loc.id} customer={loc} />)
        }
        </div>
    )
}