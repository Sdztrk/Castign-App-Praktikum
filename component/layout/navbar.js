
import React, { useState, useRef, useEffect, useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import { useRouter } from 'next/navigation'
import { mainColor } from "@/constants/Colors";
import API from '@/helpers/ApiBuilder';
import AppContext from '@/AppContext';
import Cookies from 'js-cookie';
import DropdownMain from "../menuItems/DropdownMain";



const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const { setUserInfo } = useContext(AppContext);
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curentUser = await API.get('get_current_user', Cookies.get("accessToken"));
        if (curentUser) {
          setUser(curentUser?.email)
          setUserInfo({ user: curentUser, loggedIn: curentUser?.email ? true : false })
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    Cookies.remove('accessToken'); // Clear the authentication token
    setUser(null); // Clear user info from context
    setUserInfo({ user: null, loggedIn: false });
    router.push('/login');
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const redirectToLogin = () => {
    router.push("/login")
  }
  const redirectToRegister = () => {
    router.push("/register")
  }

  return (
    <AppBar component="nav" sx={{ backgroundColor: mainColor }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <img
            src='/logoy.png'
            alt='Topfıyt'
            onClick={() => router.push("/")}
            style={{
              width: '40px',
              height: '50px',
              marginRight: '1px',
              cursor: 'pointer' // Add this line
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            <Box
              anchorEl={anchorElNav}
              sx={{position:"absolute", top:57, left:-15}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}

            >
              {Boolean(anchorElNav) && (
                <DropdownMain onClose={handleCloseNavMenu} />
              )}
            </Box>
          </Box>
          <MovieOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, pt:2 }}>
            <DropdownMain />
          </Box>
          {!user ? (
            <>
              <MenuItem onClick={redirectToLogin}>
                <Typography textAlign="center" >Giriş Yap</Typography>
              </MenuItem>
              <MenuItem onClick={redirectToRegister}>
                <Typography textAlign="center" >Kayıt Ol</Typography>
              </MenuItem>
            </>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                <MenuItem onClick={() => router.push('/profile')}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleLogout()}>
                  <Typography textAlign="center">Çıkış Yap</Typography>
                </MenuItem>

              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar
