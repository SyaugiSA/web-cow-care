import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#040C1F" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              className="logo"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h3"
                noWrap
                component="div"
                sx={{ color: "#FFFFFF", fontFamily: "Poppins" }}
              >
                Moo
              </Typography>
              <Typography
                variant="h3"
                noWrap
                component="div"
                sx={{ color: "#EBFF00", fontFamily: "Poppins" }}
              >
                Care
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "Poppins" }}
                  >
                    Home
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "Poppins" }}
                  >
                    Solusi
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "Poppins" }}
                  >
                    Tentang Kami
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "Poppins" }}
                  >
                    Harga
                  </Typography>
                  <Divider />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "Poppins" }}
                  >
                    Masuk
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: "Poppins" }}
              >
                Moo
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: "Poppins", color: "#EBFF00" }}
              >
                Care
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                href="/"
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  display: "block",
                  opacity: 0.7,
                  fontSize: 20,
                  mx: 2,
                  fontFamily: "Poppins",
                }}
              >
                Home
              </Button>

              <Button
                href="/solusi"
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  display: "block",
                  opacity: 0.7,
                  fontSize: 20,
                  mx: 2,
                  fontFamily: "Poppins",
                }}
              >
                Solusi
              </Button>

              <Button
                href="/tentang-kami"
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  display: "block",
                  opacity: 0.7,
                  fontSize: 20,
                  mx: 2,
                  fontFamily: "Poppins",
                }}
              >
                Tentang Kami
              </Button>

              <Button
                href="/harga"
                sx={{
                  my: 2,
                  color: "#EBFF00",
                  display: "block",
                  fontSize: 20,
                  mx: 2,
                  fontFamily: "Poppins",
                }}
              >
                Harga
              </Button>

              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{ backgroundColor: "#EBFF00", mx: 2 }}
              />

              <Button
                href="/login"
                sx={{
                  my: 2,
                  color: "#EBFF00",
                  display: "block",
                  fontSize: 20,
                  mx: 2,
                  border: 1,
                  fontFamily: "Poppins",
                }}
              >
                Masuk
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Divider sx={{ backgroundColor: "white", opacity: 0.7 }} />
    </>
  );
}
