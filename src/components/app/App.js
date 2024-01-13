import { useSelector } from 'react-redux';

import Header from '../header/Header';
import Profile from '../profile/Profile';
import Nav from '../nav/Nav';
import About from '../content/about/About';
import Resume from '../content/resume/Resume';
import Portfolio from '../content/portfolio/Portfolio';
import Contact from '../content/contact/Contact';

import './app.scss';

function App() {

    const activeState = useSelector(state => state.activeState);

    const array = [<About/>, <Resume />, <Portfolio />, <Contact />];

    return (
        <div className="wrapper">
            <div className="inner">
                <Header />
                <div className="content">
                    <Profile />
                    <div className="info">
                        <Nav />
                        {
                            array[activeState]
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
