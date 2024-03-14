import React, { useState } from 'react'
import navbarSecond from './css/navbarSecond.css'

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

const NavbarSecond = () => {
    const[openMenu, setOpenMenu]= useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
      };
    const menuOptions = [
        {
            text: "Accueil",
            icon:<HomeIcon />,
        },
        {
            text: "Qui sommes-nous?",
            icon:<CommentRoundedIcon />,
        },
        {
            text: "Guide du cooker",
            icon:<InfoIcon />,
        },
        {
            text: "FAQ",
            icon:<InfoIcon />,
        },
        {
            text: "Contact",
            icon:<InfoIcon />,
        }
    ]
  return (
    <nav>
        <div className=" frontcss2">
            <ul className='menu-list'>
                <li><a className='position' href="">Accueil</a></li>
                <li><a className='position' href="">Qui sommes-nous?</a></li>
                <li><a className='position' href="">Guide du cooker</a></li>
                <li><a className='position' href="">Faq</a></li>
                <li><a className='position' href="">Contact</a></li>
            </ul>
        </div>
        <div className="deroulant">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={toggleMenu} anchor="right">
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

export default NavbarSecond