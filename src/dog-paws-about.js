import './dog-paws-css.css';
import logo from './dog.png';

function DogPawsAbout() {
    return (
        <div>
            <div className="first-header">
                <h1 className="header-add">
                    put add text here
                </h1>
            </div>
            <div className="nav-bar">
            <div className="logo">
                        <img src={logo} alt='' />
                    </div>
                <ul className="nav-bar">
                    <li><a href="./dog-paws-about">About Us</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <section className="section">
                <div className="section-main">
                    <p>About - there should be text here</p>
                </div>
            </section>
            <footer className="footer">
                <p>footer text here</p>
            </footer>
        </div>
    )

}

export default DogPawsAbout;