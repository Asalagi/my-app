import './dog-paws-css.css';
import logo from './dog.png';

function DogPaws() {
    return (
        <div>
            <div className="first-header">
                <h1 className="header-add">
                    Book before June 1st and receive free blueberry facial
                </h1>
            </div>
            <div clsssName="nav-bar">
                <ul className="nav-bar">
                   <div className="logo">
                        <img src={logo} alt='' />
                    </div>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )

}

export default DogPaws;