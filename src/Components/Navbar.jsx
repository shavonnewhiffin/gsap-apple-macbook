import React from 'react'
import { navLinks } from '../Constants/index.js'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <img src="logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label })=>(
                       <li key={label}>
                        <a href={label}>{label}</a>
                       </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
<button>
    <img src="/search.svg" alt="search" />
</button>
<button>
    <img src="/cart.svg" alt="cart" />
</button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar