import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InfoIcon from '@mui/icons-material/Info';
import {FaBaseballBall} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header-container">
        <div className='horizontal-box'>
          <FaBaseballBall className="header-logo" fontSize='inherit'/>
          <Typography variant="h1">
            <span className="header-title">SportsGenie</span>
          </Typography>
        </div>
        <div className='horizontal-box'>
          <Link to="/about" className='vertical-box icon'>
            <InfoIcon sx={{marginRight: 2}} />
          </Link>
          <a target="_blank" href="https://github.com/lucaspauker/sports-genie" className='vertical-box icon'>
            <GitHubIcon sx={{marginRight: 2}} />
          </a>
          <a target="_blank" href="https://twitter.com/lucas_pauker" className='vertical-box icon'>
            <TwitterIcon />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

