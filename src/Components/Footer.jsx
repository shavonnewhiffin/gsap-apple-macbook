import React from 'react'
import { footerLinks } from '../Constants'

const Footer = () => {
  return (
    <footer>
        <div className="info">
            <p>
                More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1965.
            </p>
            <img src="/logo.svg" alt="Apple logo" className="hidden sm:block"/>
        </div>
        <hr />
        <div className="links">
            <p>
                Copyright © 2024 Apple Inc. All Rights Reserved. 
            </p>
            <ul>
                {footerLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.link}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer