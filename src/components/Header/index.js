import * as React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../../store/userAuth/actions";
import { getIsAuth } from "../../store/userAuth/selectors";
import "../../css/style.css";
import logo from "../../assets/images/logo_transparent.png";
import logo2 from "../../img/logo.svg";

export const Header = () => {
  const dispatch = useDispatch();
  function logOutHandler() {
    dispatch(logOutUserAction);
  }
  const authed = useSelector(getIsAuth);

  return (
    <header>
      <nav className="navbar container">
        <a href="/">
          <img className="navbar-logo" src={logo2} alt="logo" />
        </a>
        {authed ? (
          <Link to="/" className="nav-btn" onClick={logOutHandler}>
            Выйти
          </Link>
        ) : (
          <Link to="/login" className="nav-btn">
            Войти
          </Link>
        )}
      </nav>
    </header>

    // <div className="navbar container">
    //     <div><Link style={{ textDecoration: 'none' }} to='/'><img src={logo} className="navbar-logo" alt="logo" /></Link></div>
    //     <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>
    //         {
    //             authed ? <Link to="/" style={{ textDecoration: 'none' }}><Button className="nav-btn" onClick={logOutHandler}>Выйти</Button></Link> : <Link to="/login" style={{ textDecoration: 'none' }} ><Button>Войти</Button></Link>
    //         }
    //      </Box>
    //  </div>
  );
};

//  <AppBar position="static" sx={{ backgroundColor: 'white', p: 2 }}>
//             <div className="container">
//                 <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} >

//                     <Box><Link style={{ textDecoration: 'none' }} to='/'><img src={logo} alt="logo" /></Link></Box>
//                     <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>
//                         {
//                             authed ? <Link to="/" style={{ textDecoration: 'none' }}><Button onClick={logOutHandler}>Выйти</Button></Link> : <Link to="/login" style={{ textDecoration: 'none' }} ><Button>Войти</Button></Link>
//                         }
//                     </Box>
//                 </Toolbar>
//             </div>
//         </AppBar>
//          <header>
//             <nav class="navbar container">
//                 <a href="#"><img class="navbar-logo" src="../img/logo.svg" alt="picture"></img></a>
//                 <button class="nav-btn">Войти</button>
//             </nav>
//         </header>
