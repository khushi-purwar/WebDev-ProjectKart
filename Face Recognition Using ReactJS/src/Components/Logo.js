import Tilt from 'react-tilt';
import logo from './logo.svg'; 
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-5 ma2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2">
                    <img alt="logo" src={logo}  />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
