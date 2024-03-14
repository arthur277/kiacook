import React, { useState } from 'react'
import navbar from './css/navbar.css'

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";


const Navbar = () => {
    const[openMenu, setOpenMenu]= useState(false);
    const menuOptions = [
        {
            text: "Devenir cooker",
            icon:<HomeIcon />,
        },
        {
            text: "Trouver cooker",
            icon:<CommentRoundedIcon />,
        },
        {
            text: "Mon compte",
            icon:<InfoIcon />,
        }
    ]
  return (
    <nav>
        <div className="navbar-links-container frontcss1">
            <div>
                <ul>
                    <li><a className='position' href="">Devenir cooker</a></li>
                    <li><a className='position' href="">Trouver cooker</a></li>
                </ul>  
            </div>
            <a className='positionG' href="">Mon compte</a>
        </div>
        <div className="deroulant">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
        >
            <List>
            {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />
        </Box>
        </Drawer>
  </nav>
);
};

export default Navbar