import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
import Brutal from './brutal/Brutal'
import Dailies from './dailies/Dailies'
import LongTerm from './long-term/LongTerm'
import Streak from './calendar/Streak'

function App() {

  return (
    <Router>
      <Header />
      <div className='bg'>
        <Switch>
          <Route exact path='/'>
            <Brutal />
          </Route>
          <Route path='/daily'>
            <Dailies />
          </Route>
          <Route path='/longterm'>
            <LongTerm />
          </Route>
          <Route path='/streak'>
            <Streak />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
