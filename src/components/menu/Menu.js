import React from 'react'
import { Link } from "react-router-dom"
import './Menu.scss'

export default function Menu() {
    return (
        <ul className="menu">
            <li>
                <Link className='btn-1' to='/greenhouse'> Greenhouse </Link>
            </li>
            <li>
            <Link className='btn-1' to='/forecast'> Forecast</Link>
            </li>
            <li>
                <a href="#" className="btn-1"> Settings </a>
            </li>
        </ul>
    )
}