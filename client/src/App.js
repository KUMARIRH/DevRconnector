import './App.css'
import React, { Fragment, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import EditProfile from './components/profile-forms/EditProfile'
import AddExperience from './components/profile-forms/AddExperience'
import AddEducation from './components/profile-forms/AddEducation'
import CreateProfile from './components/profile-forms/CreateProfile'
import PrivateRoute from './components/routing/PrivateRoute'

//Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
//
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/create-profile"
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path="/edit-profile"
              element={<PrivateRoute component={EditProfile} />}
            />
            <Route
              path="/add-experience"
              element={<PrivateRoute component={AddExperience} />}
            />
            <Route
              path="/add-education"
              element={<PrivateRoute component={AddEducation} />}
            />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  )
}

export default App
