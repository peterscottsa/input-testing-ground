import './styles.css'
import { FormikForm } from './formik-input/form'
import { NativeForm } from './input/form'

export default function App() {
  return (
    <div className="App">
      <h2>Formik form</h2>
      <FormikForm />
      <h2>Native form</h2>
      {/* <NativeForm /> */}
    </div>
  )
}
