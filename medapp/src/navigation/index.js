import {NavLink} from 'react-router-dom'

export function NavigationBar() {
    return <nav className="nav-bar">
        <div className="nav-bar-links">
            <ul>
                <li>
                    <NavLink to="/">meds</NavLink>
                </li>
            </ul>
        </div>
    </nav>
}