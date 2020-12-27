import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="#home" rel="noreferrer noopener">
          Home
        </a>
        <a href="https://github.com/ebi10sa22/tic-tac-toe" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </footer>
    );
  }
}

export default Footer;
