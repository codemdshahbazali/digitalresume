import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink, withRouter } from "react-router-dom";

import { HomeRounded } from "@mui/icons-material";
import TelegramIcon from "@mui/icons-material/Telegram";

import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar bg='light' sticky='top' expand='lg' className='header'>
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(resumeData.socials).map((keyVal) => {
            return (
              <a
                href={resumeData.socials[keyVal].link}
                key={keyVal}
                target='_blank'
                rel='noreferrer'
              >
                {resumeData.socials[keyVal].icon}
              </a>
            );
          })}
          <CustomButton text='Hire Me' icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
