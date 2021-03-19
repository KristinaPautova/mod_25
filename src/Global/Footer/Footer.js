import React from 'react';
import './Footer.css';
import '../media.css';

const Footer = () => (
    <footer className="footer__frame">
        <div className="footer__frame-copy">© SkillDrive Inc. 2020</div>
        <div className="footer__frame-socials">
            <a href="https://vk.com/" className="icon-vk is-animated" target="_blank" rel="noopener noreferrer"/>
            <a href="https://www.instagram.com/" className="icon-instagram is-animated" target="_blank" rel="noopener noreferrer" />
            <a href="https://www.facebook.com/" className="icon-facebook is-animated" target="_blank" rel="noopener noreferrer"/>
        </div>
    </footer>
)

export default Footer;