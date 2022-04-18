import {Switch, Route} from 'react-router-dom'
import Register from '../components/pages/Register'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'

const Routes = () => {
      return (
            <>
                  <Switch>
                        <Route exact path="/" component={Register}></Route>
                        <Route exact path="/home/:name" component={Home}></Route>
                        <Route exact path="/login" component={Login}></Route>
                  </Switch>
            </>
      )
}

export default Routes