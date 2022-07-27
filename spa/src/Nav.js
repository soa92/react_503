import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/">muenu01</Link></li>
                <li><Link to="/Tab">muenu02</Link></li>
                <li><Link to="/sdsds">muenu03</Link></li>
                <li><Link to="/2">muenu04</Link></li>
                <li><Link to="/3">muenu05</Link></li>
            </ul>
        </div>
    )
}

export default Nav;