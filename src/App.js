import './styles.css'
import { FormikForm } from './pages/formik-form/formik-form'
import { NativeForm } from './pages/native-form/native-form'
import { HookForm } from './pages/hook-form/hook-form'
import { RenderForm } from './pages/render/render-form'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import '../node_modules/highlight.js/styles/atelier-dune-light.css'
import { FormikRenderForm } from './pages/formik-with-render/formik-with-render'

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
            <div>
              <Link to="/render">Render form</Link>
            </div>
            <div>
              <Link to="/formik-render">Formik with render form</Link>
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
            <Route path="/render">
              <RenderForm />
            </Route>
            <Route path="/formik-render">
              <FormikRenderForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
