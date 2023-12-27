import React from 'react'
import { Link } from 'react-router-dom';
import PriviewId from './PriviewId';
import { BrowserRouter as Router } from 'react-router-dom';
import icon3 from '../image/svg-image-3.svg';
import icon4 from '../image/svg-image-4.svg';
import icon5 from '../image/svg-image-6.svg';
import icon6 from '../image/svg-image-7.svg';
import icon7 from '../image/svg-image-8.svg';
import icon8 from '../image/svg-image-9.svg';
import icon9 from '../image/svg-image-10.svg';
import icon10 from '../image/svg-image-11.svg';
import icon11 from '../image/svg-image-14.svg';
import logo from '../image/svg-image-1.svg';


const navbar = () => {
    const toggleDropdown = () => {
        const menuDropdown = document.querySelector('.menu_dropdown');
        menuDropdown.classList.toggle('visible');

        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('visible2');

        const dropd_a = document.querySelector('.dropd_a');
        dropd_a.classList.toggle('dropd_a2');

        const arrow_down = document.querySelector('.arrow_down');
        arrow_down.classList.toggle('arrow_down2');

        const arrow_top = document.querySelector('.arrow_top');
        arrow_top.classList.toggle('arrow_top2');
    };

    // const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleDropdown2 = () => {
        const menuDropdown = document.querySelector('.sid_menus_all');
        menuDropdown.style.display = menuDropdown.style.display === 'none' ? 'block' : 'none';
      };



    return (
        <div>
            <div class="sidebar">
                <div class="sidebar_menu">
                    <div className='said_icons'>
                        <div className='logo_pri'>
                                 <img src={logo} alt='logosicon' className='logosiconNavs'/>
                                 <p>Preview ID</p>
                        </div>
                        <button onClick={toggleDropdown2} className='bars'><i class="fa fa-bars" aria-hidden="true"></i></button>
                    </div>

                    <div className='sid_menus_all'>

                        <div className='priviewld'>
                                
                        </div>
                        <Link class="active" to="/"><span className='iconnav'><img className="iconnav" src={icon3} alt='icon' /></span>Dashboard</Link>

                        <div className="dropdown">
                            <Link onClick={toggleDropdown} className='dropd_a' id="tems">
                                <span className='iconnav'><img className="iconnav" src={icon4} alt='icon' /></span>  Team

                                <span className='arrow_down'> <i class="fa fa-angle-down" aria-hidden="true"></i> </span>

                                <span className='arrow_top'> <i class="fa fa-angle-up" aria-hidden="true"></i> </span>
                            </Link>

                            <div className="menu_dropdown">
                                <Link className="dropdown-item" to="/"> <span className='iconnav'><img className="iconnav" src={icon5} alt='icon' /></span>Partners</Link>
                                <Link className="dropdown-item" to="/"> <span className='iconnav'><img className="iconnav" src={icon6} alt='icon' /></span>Links</Link>
                                <Link className="dropdown-item" to="/"> <span className='iconnav'><img className="iconnav" src={icon7} alt='icon' /></span>Stats</Link>
                            </div>
                        </div>

                        <Link to="/"> <span className='iconnav'><img className="iconnav" src={icon8} alt='icon' /></span>Marathon</Link>
                        <Link to="/"> <span className='iconnav'><img className="iconnav" src={icon9} alt='icon' /></span>Social</Link>
                        <Link to="/"> <span className='iconnav'><img className="iconnav" src={icon10} alt='icon' /></span>NFTs</Link>



                        <Link to="/" ><span className='iconnav'><img className="iconnav" src={icon11} alt='icon' /></span>Promo & PDFs</Link>

                        <div className='social_media'>
                            {/* Your social media content */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default navbar
