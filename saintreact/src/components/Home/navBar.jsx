import s2 from '../../assets/s2.svg';
import styles from '../../pages/LandPaging/Land.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';
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
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

// Função para rolar suavemente
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, id: "inicio" },
    { text: "Sobre", icon: <InfoIcon />, id: "sobre" },
    { text: "Funcionalidades", icon: <BuildIcon />, id: "funcionalidades" },
    { text: "Faq", icon: <LiveHelpIcon />, id: "faq" },
    { text: "Membros", icon: <PeopleIcon />, id: "membros" },
    { text: "Contato", icon: <PhoneRoundedIcon />, id: "contato" },
  ];

  return (
    <nav className={styles.navBarHome}>
      <div className={styles.navLogoContainer}>
        <img src={s2} alt="Logo" />
      </div>
      <div className={styles.navBarLinksContainer}>
        {menuOptions.slice(0, 5).map(option => (
          <button key={option.id} onClick={() => scrollToSection(option.id)}>
            {option.text}
          </button>
        ))}
        <Link to="/Inicio" className={styles.navButton}>
          Acessar
        </Link>
      </div>
      <div className={styles.navbarMenuContainer}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        PaperProps={{
          sx: {
            borderRadius: 0,
            p: 0,
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <Link to="/inicio">
            <button className={styles.secondaryButtonNav}>Acessar</button>
          </Link>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
