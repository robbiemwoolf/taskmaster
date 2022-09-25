import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
import Brutal from './brutal/Brutal'
import Ritual from './ritual/Ritual'
import Daily from './daily/Daily'
import Streak from './streak/Streak'

function App() {

  return (
    <Router>
      <Header />
      <div className='bg'>
        <Switch>
          <Route exact path='/'>
            <Daily />
          </Route>
          <Route path='/ritual'>
            <Ritual />
          </Route>
          <Route path='/brutal'>
            <Brutal />
          </Route>
          <Route path='/streak'>
            <Streak />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App