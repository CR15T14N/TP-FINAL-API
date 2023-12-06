import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(){
    return(
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/artists'} >Artists</NavLink>
            <NavLink to={'/vistaprevia'} >Vista Previa</NavLink>
        </nav>
    )
}
export default NavBar