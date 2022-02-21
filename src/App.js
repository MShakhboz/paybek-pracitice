import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'; 
// components
import Account from './components/Account';
import Home from './components/Home';
import Users from './components/UsersPage/Users';
import Txns from './components/TXNS';
import Pg from './components/PG';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import UserForm from './components/UsersPage/UserComponents/UserPushNotification/UserForm';
import UserDataTable from './components/UsersPage/UserComponents/UserPushNotification/UserDataTable';
import UserPushNotification from './components/UsersPage/UserComponents/UserPushNotification/UserPushNotification';
import Active from './components/UsersPage/UserComponents/ActiveComponents/Active';
import Inactive from './components/UsersPage/UserComponents/InactiveComponents/Inactive';
import Blocked from './components/UsersPage/UserComponents/BlockedComponent/Blocked';
import Events from './components/UsersPage/UserComponents/EventComponent/Events';
import UserInfo from './components/UsersPage/UserComponents/UserPushNotification/UserInfo';

import store from './components/redux/store';
import './App.css';
import PaswValid from './components/SignIn/PaswValid';
import PaswForgot from './components/SignIn/PaswForgot';


function App() {
  const NavLayout = () => (
    <>
      <Navbar />
      <Outlet /> {/* nested routes will be here */}
    </>
  );

  return (
    <Provider store = {store}>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route element = {<NavLayout />}>
              <Route path='/home' element = { <Home />} />
              <Route path="/users" element = { <Users />}>
                <Route path = "active-users" element = { <Active />}/>
                <Route path = "inactive-users" element = {<Inactive />} />
                <Route path='push-notification' element = {<UserPushNotification />}>
                  <Route path="user-form" element = {<UserForm />}/>
                  <Route path="user-data-table" element = {<UserDataTable />}>
                  </Route>
                </Route>
                <Route path='blocked-users' element = {<Blocked />} />
                <Route path = "events" element = {<Events />} />
              </Route>
              <Route path="/txns" element = { <Txns /> } />
              <Route path = "/pg" element = { <Pg /> } />
              <Route path="/account" element={ <Account /> }/>
              <Route path='/users/push-notification/user-data-table/:id' element = {<UserInfo />} />
            </Route>
            <Route path="/" element={ <SignIn /> }>
              <Route index element = {<PaswValid />} />
              <Route path='pasw-valid' element={ <PaswValid /> }/>
              <Route path='pasw-forgot' element={ <PaswForgot /> }/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
