import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './normalize.css';
import './Main.css';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'
import NotFound from './404.js';

function MainBlock() {
    return (
        <Router>
            <div className='MainBlock'>
                <div className="header">
                    <div className="container-header">
                        <div className="logo">
                            <h3 className='title__logo'><a href="/">LOGO</a></h3>
                        </div>

                        <div className="nav">
                            <ul>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>

                            <button className='btn btn-blue'>Registration</button>
                        </div>
                    </div>
                </div>
                <div className="container-all">

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/projects' component={Projects} />
                        <Route component={NotFound} />
                    </Switch>
                </div>







            </div>
        </Router>
    )
}


export default MainBlock;