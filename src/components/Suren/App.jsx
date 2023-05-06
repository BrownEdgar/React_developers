import { useState, useEffect, useRef } from 'react'
import React from 'react'
import {Formik, Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './App.scss'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  telephone: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required()
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  country: '',
  city: ''
};

export default function App() {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false)
;    resetForm();
  };

  return (
    <div className="App">
      <h1>Personal info</h1>
      <p>Lorem, ipsum dolor.</p>
      <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
              <Field name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="span" className="error" />
            </div>
            <div>
              <Field name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="span" className="error" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="span" className="error" />
            </div>
            <div>
              <Field name="telephone" type="tel" placeholder="Telephone" />
              <ErrorMessage name="telephone" component="span" className="error" />
            </div>
            <div>
              <h1>Pick Up info</h1>
              <p>Lorem, ipsum dolor.</p>
              <div className='selection'>        
              <Field name="country" as="select" placeholder="Country">
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="Argentina">Argentina</option>
              </Field>
              <ErrorMessage name="country" component="span" className="error" />
              <Field name="city" placeholder="City" />
              <ErrorMessage name="city" component="span" className="error" />
            </div>
              </div>
              <div>
              <button type="submit" disabled={!isValid || isSubmitting}>Submit</button>
              </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );

}
  
  
  
