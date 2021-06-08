import './styles.css'
import { FormikForm } from './formik-input/form'
import { NativeForm } from './input/form'
import { HookForm } from './hook-form'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  margin-bottom: 20px;
`

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          Use the links to navigate to each form
          <Nav>
            <div>
              <Link to="/formik">Formik form</Link>
            </div>
            <div>
              <Link to="/native">Native</Link>
            </div>
            <div>
              <Link to="/hook">Hook form</Link>
            </div>
          </Nav>
          <Switch>
            <Route path="/formik">
              <FormikForm />
            </Route>
            <Route path="/native">
              <NativeForm />
            </Route>
            <Route path="/hook">
              <HookForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
