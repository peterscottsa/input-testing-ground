import './styles.css'
import { FormikForm } from './formik-input/form'
import { NativeForm } from './input/form'
import { HookForm } from './hook-form'


export default function App() {
  return (
    <div className="App">
      <h2>Formik form</h2>
      {/*<FormikForm />*/}
      <h2>Native form</h2>
      {/* <NativeForm /> */}
      <h2>Hook form</h2>
      <HookForm />
    </div>
  )
}
