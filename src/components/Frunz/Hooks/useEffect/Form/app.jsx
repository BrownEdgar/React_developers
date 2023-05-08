import React from 'react'
import * as yup from 'yup'
import { Formik,Field,ErrorMessage,Form } from 'formik'


const validationSchema = yup.object({
        first_name:yup.string().required().min(4),
        last_name: yup.string().required().min(5),
        email: yup.string().required("Must by email"),
        telephone:yup.string().required(),
        country:yup.string().required(),
        city:yup.string().required()
})

const initialValues = {
    first_name:"",
    last_name:'',
    email:'',
    telephone:'',
    country:'',
    city:''
    }

export default function App() {
    const handleSubmit =(values)=>{
        console.log(values);
    }

  return (
   <div>
    <h1>Personal info</h1>
    <p>Mussum ipsum cacilds,vidis litro abertis</p>
    <Formik
    initialValues ={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    validateOnChange={false}
    validateOnBlur={true}
    >
   {(formik)=>{
    return(
        <Form>
        <div>
            <p>First name</p>
        <Field
         type="text" 
         name='first_name' 
         id='first_name'
        />
         <ErrorMessage name='first_name' component='p'/>
        </div>
         <div>
            <p>Last name</p>
         <Field
         type="text" 
         name='last_name' 
         id='last_name'
         />
         <ErrorMessage name='last_name' component='p'/>
         </div>
         <div>
            <p>Email</p>
         <Field
         type="email" 
         name='email' 
         id='email'
         />
         <ErrorMessage name='email' component='p'/>
         </div>
         <div>
            <p>Telephone</p>
         <Field
         type="tel" 
         name='telephone' 
         id='telephone'
         />
         <ErrorMessage name='telephone' component='p'/>
         </div>
    <h1>Pick Up info</h1>
    <p>Mussum ipsum cacilds,vidis litro abertis</p>
       <div>
    <p>Country</p>
       <select 
         name="country"
          id="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
            <option value="Armenia">Armenia</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
         </select>
       </div>
        <div>
            <p>City</p>
        <Field
         type="text" 
         name='city' 
         id='city'/>
         <ErrorMessage name='city' component='p'/>
        </div>
         <div><input type="submit" value="Register" /></div>
    </Form>
    )
   }} 
    </Formik>
    
   </div>
  )
}
