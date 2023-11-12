/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About",
      icon: <InfoIcon />,
      link: "about",
    },
    {
      text: "How Does It Work",
      icon: <QuestionMarkIcon />,
      link: "work",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      link: "testimonial",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "contact",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      link: "",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, i) => (
          <MenuItem itemName={item.text} link={item.link} key={i} />
        ))}
        <button className="primary-button">Book Now</button>
      </div>
      <div className="navbar-menu-container">
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
                <ListItemButton href={`#${item.link}`}>
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

export default Navbar;
