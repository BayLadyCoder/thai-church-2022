import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { theme } from "../theme";

const pages = [
  { name: "Home", link: "/", target: "_self" },
  { name: "Services", link: "#services", target: "_self" },
  { name: "About", link: "#about", target: "_self" },
  { name: "Missions", link: "#missions", target: "_self" },
  { name: "Events", link: "#events", target: "_self" },
  { name: "Contact", link: "/contact", target: "_self" },
  {
    name: "Give",
    link: "https://www.facebook.com/donate/489870772734048/10151866592844990/",
    target: "_blank",
  },
];

const LOGO = "Thai Christian Church DC";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: theme.palette.primary.black, padding: "0 20px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: theme.palette.primary.light,
              fontWeight: "bold",
            }}
          >
            {LOGO}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map(({ name, link, target }, index) =>
              index < pages.length - 1 ? (
                <Button
                  className="nav-link"
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: theme.palette.primary.text,
                    fontWeight: "bold",
                  }}
                  target={target}
                  href={`${link}`}
                >
                  {name}
                </Button>
              ) : (
                <Button
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: theme.palette.primary.white,
                    fontWeight: "bold",
                    border: `1px solid ${theme.palette.primary.white}`,
                    borderRadius: "10px",
                    marginLeft: "10px",
                    padding: "0 10px",
                    height: "30px",
                  }}
                  target={target}
                  href={`${link}`}
                  variant="contained"
                  color="secondary"
                >
                  {name}
                </Button>
              )
            )}
          </Box>

          {/* small device */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    textAlign="center"
                    target={page.target}
                    href={page.link}
                    sx={{
                      color: theme.palette.primary.black,
                    }}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
