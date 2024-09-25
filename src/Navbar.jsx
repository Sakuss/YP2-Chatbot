import {useState} from 'react'
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <nav style={{position: "fixed", top: 0, width: "100%", background: "gray"}}>
            <ul style={{display: "flex"}}>
                <li style={{margin: 15}}>
                    <Link to={"/page1"}>page 1</Link>
                </li>
                <li style={{margin: 15}}>
                    <Link to={"/page2"}>page 2</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar