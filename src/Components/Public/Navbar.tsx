import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

import { GoogleLogin } from "@react-oauth/google";
import Dialog from "@mui/material/Dialog";

import { GoogleOAuthProvider } from "@react-oauth/google";

import jwt_decode from "jwt-decode";
import { Outlet } from "react-router-dom";

import { profile } from "../../services/ProfileService";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};
function Navbar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pic, setPic] = useState("");

  const loginHandler = (credentialResponse: any) => {
    console.log(credentialResponse.credential);

    if (credentialResponse.credential !== undefined) {
      setIsLoggedIn(true);

      var decoded = jwt_decode(credentialResponse.credential);

      localStorage.setItem("token", credentialResponse.credential);

      profile().then((data) => {
        // setPic(data.data.image);
        localStorage.setItem("image", data.data.image);
        console.log(data.data.image);
      });
    }
  };
  const logoutHandler = () => {
    googleLogout();

    setIsLoggedIn(false);

    localStorage.removeItem("image");
    localStorage.removeItem("token");
    navigate("/home");
    alert("You have been logged out");
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KICKS
            </Typography>
            <Box sx={{ flexGrow: 0, marginLeft: "1100px" }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!localStorage.getItem("image") && <Avatar />}
                {localStorage.getItem("image") && (
                  <Avatar src={localStorage.getItem("image") || ""} />
                )}
              </IconButton>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {localStorage.getItem("token") && (
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Profile</MenuItem>
                  </Link>
                )}

                {localStorage.getItem("token") && (
                  <Link
                    to="/addproduct"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Add Product</MenuItem>
                  </Link>
                )}

                {!localStorage.getItem("token") && (
                  <MenuItem style={{ color: "black" }} onClick={handleOpen}>
                    Login
                  </MenuItem>
                )}

                {localStorage.getItem("token") && (
                  <MenuItem style={{ color: "black" }} onClick={logoutHandler}>
                    Logout
                  </MenuItem>
                )}
              </Menu>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <GoogleOAuthProvider clientId="22805011057-sfgcohpdbgp7a0gaq229o0coqlcofrhq.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={loginHandler}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      useOneTap
                    />
                  </GoogleOAuthProvider>
                </Box>
              </Modal>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
