import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import BookForm from './component/BookForm'
import Home from "./component/Home"
import BookList from './component/BookList'
import NavBar from './component/NavBar'
const App = () => {
  return (
    <div>
      
      <Router>
      <NavBar/>
        <Route exact path= "/" component={Home}></Route>
        <Route exact path="/books/new" component={BookForm}></Route>
        <Route exact path="/books"component={BookList}></Route>
      </Router>
    </div>
  )
}

export default App

