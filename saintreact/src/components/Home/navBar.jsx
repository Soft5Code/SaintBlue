import s2 from '../../assets/s2.svg'
import styles from '../../pages/LandPaging/Land.module.css';

import { Link } from 'react-router-dom'
import  { useState } from "react";
// import { BsCart2 } from "react-icons/bs";
// import { IoPeople } from "react-icons/io5";
import PeopleIcon from '@mui/icons-material/People';
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
import BuildIcon from '@mui/icons-material/Build';
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon  />,
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
    },
    {
      text: "Funcionalidadess",
      icon: <BuildIcon />,
    },
    {
      text: "Faq",
      icon: <LiveHelpIcon />,
    },
    {
      text: "Membros",
      icon: <PeopleIcon  />,
    },
    {
      text: "Contato",
      icon: < PhoneRoundedIcon  />,
    },
  ];

  return (
    <nav className={styles.navBarHome}>
      <div className={styles.navLogoContainer}>
        <img src={s2} alt="" /> 
      </div>
      <div className={styles.navBarLinksContainer}>
        <Link to='/'>Inicio</Link>
        <Link to='/contact'>Contact</Link>
        <a href="'">Funcionalidades</a>
        <a href="'">Membros</a>
        <a href="'">FAQ
          {/* { <PhoneRoundedIcon className="navbar-cart-icon" />} */}
        </a>
        <Link to="/Inicio" className={styles.navButton}>
          Acessar
        </Link> 
      </div>
      <div className={styles.navbarMenuContainer}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right"
        PaperProps={{
          sx: {
            borderRadius: 0,
            p: 0,
          }
        }}
        >
        <Box
          sx={{ width: 250, }}
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
          <Divider  />
          <Link to={'/inicio'}>
            <button className={styles.secondaryButtonNav}>Acessar</button>
          </Link>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;