import React from "react";
import "../styles/Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";

const Navbar = () => {
const links = [
    { key: "lambders", text: "Startup" },
    { key: "downloadAkira", text: "Akira" },
    { key: "contact", text: "Contáctanos" },

];

return (

    <div className="navbar">

        <div className="navbar-container">

            <a href="#home" className="home-icon">
                <IconButton aria-label="home" style={{padding:'0rem'}}>
                <HomeIcon sx={{ color: 'black' }} />
                </IconButton>
            </a>

            {links.map(link => (
                <a key={link.key} href={`#${link.key}`} className="nav-link">
                    {link.text}
                </a>
            ))}
            
        </div>


    </div>
);
}

export default Navbar;