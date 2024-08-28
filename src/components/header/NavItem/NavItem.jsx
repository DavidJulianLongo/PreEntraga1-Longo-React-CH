import "./NavItem.css";

export const NavItem = ({ text }) => {
    return (
        <>
            <li>{text}</li>
        </>
    );
};



// export const NavItem = ({ model, path }) => {
//     return (
//         <>
//             <li>
//                 <Link to={path}>{model}</Link>
//             </li>
//         </>
//     );
// }