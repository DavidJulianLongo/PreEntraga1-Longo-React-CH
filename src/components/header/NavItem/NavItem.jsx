import "./NavItem.css";
import { Link } from 'react-router-dom';

export const NavItem = ({ model, path }) => {
    return (
        <>
            <li>
                <Link to={path}>{model}</Link>
            </li>
        </>
    );
}