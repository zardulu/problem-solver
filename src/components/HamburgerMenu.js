import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const navLinks = [
    'BANKRUPTCY',
    'COMMERCIAL DISPUTES',
    'CORPORATE DISPUTES',
    'TAX DISPUTES',
    'ECONOMIC CRIME',
    'BLOG',
    'CONTACT'
  ];

const HamburgerMenu = () => {

    

    return (
        <div className='lg:hidden'>
            <Menu width={"69%"}>
                    <div className="text-white text-xl hidden lg:flex flex-col justify-around">
                        {navLinks.map(link => (
                                                <Link to={`/${link.toLowerCase()}`} key={link}>
                                                    <div className="mb-2">
                                                        <button className="text-black">{link}</button>
                                                    </div>
                                                </Link>
                                                    ))}
                    </div>
            </Menu>
        </div>
    );
}

export default HamburgerMenu;
<>

</>