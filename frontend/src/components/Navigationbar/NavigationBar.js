import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/accountmanagement'>Account Management</Link></li>
        </ul>
    )
}