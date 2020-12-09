import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from './Components/Home.js';
import Academics from './Components/Academics.js';
import Finance from './Components/Finance.js';
import Health from './Components/Health.js';
import Housing from './Components/Housing.js';
import GoogleMap from './Components/GoogleMap.js';
import GoogleBtn from './Components/GoogleBtn';




import { GoogleLogin, GoogleLogout } from 'react-google-login';
require('dotenv').config();


document.title = "GatorAider";

const {
  REACT_APP_GOOGLE_LOGIN_API_KEY
} = process.env;


const CLIENT_ID = `${REACT_APP_GOOGLE_LOGIN_API_KEY}`;
//import Login from './Components/sss.js'
// TODO Add a 404 page
// TODO commit package.json file
// TODO make the homepage the default first page
// TODO! MORTGAGE.JS WAS INSTALLED, react-compound-interestwas installed, interest.js installed, Passport.js installed

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

//const Public = () => <h3>Public</h3>
//const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
        state = {
          redirectToReferrer: false
        }
        login = () => {
          fakeAuth.authenticate(() => {
            this.setState(() => ({
              redirectToReferrer: true
            }))
          })
        }
        render() {
          const { from } = this.props.location.state || { from: { pathname: '/' } }
          const { redirectToReferrer } = this.state

          if (redirectToReferrer === true) {
            return <Redirect to={from} />
          }

          return (
            <div>
                <div>
                    { this.state.isLogined ?
                      <GoogleLogout
                        clientId={ CLIENT_ID }
                        buttonText='Logout'
                        onLogoutSuccess={ this.logout }
                        onFailure={ this.handleLogoutFailure }
                      >
                      </GoogleLogout>: <GoogleLogin
                        clientId={ CLIENT_ID }
                        buttonText='Login'
                        onSuccess={ this.login }
                        onFailure={ this.handleLoginFailure }
                        cookiePolicy={ 'single_host_origin' }
                        responseType='code,token'
                      />
                    }
                    </div>

            </div>
          )
        }
}


const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated
    ? <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p>You are not logged in.</p>
))


//Write Private Route instead of Route if you want to restrict access

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default function App() {
  return (
    <Router>

      <div>
        <div class="topnav">
          <a class="active" href="/">UF</a>

{/*the titles of the different navigation links*/ }
          <div>
            <Link to="/home">Home</Link>
          </div>

          <div>
            <Link to="/academics">Academics</Link>
          </div>

          <div>
            <Link to="/finance">Finance</Link>
          </div>

          <div>
            <Link to="/health">Health</Link>
          </div>

          <div>
            <Link to="/housing">Housing</Link>
          </div>

          <div>
            <Link to="/map">Map</Link>
          </div>



        </div>
      </div>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time


          NOTE TO SELF GET RID OF EXACT makes it only one homepage
        */}


        <div className = "bgbutton">
          <AuthButton />
        </div>

{/*
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>

        <Route path="/public" component={Public} />
        you must login to see this page plus the login
        <Route path="/login" component={Login} />
        <PrivateRoute path='/protected' component={Protected} />
      </div>
      */}

        <Switch>
        <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/home" component={Home}/>
          {/* <Route path="/log_in">
            <log_in />
          </Route> */}


          <PrivateRoute path="/academics" component={Academics}/>
          <PrivateRoute path="/finance" component={Finance}/>
          <PrivateRoute path="/health" component={Health}/>
          <PrivateRoute path="/housing" component={Housing}/>
          <PrivateRoute path="/map" component={GoogleMap}>
          {/*<GoogleMap /> leftover artifact, not necessary*/}
          </PrivateRoute>
        </Switch>
    </Router>
  );
}
