import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import './LoginPage.scss'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage = ({ onLogin }) => {
  const handleFormSubmit = (values, { setSubmitting }) => {
   
    console.log('Logging in with email', values.email, 'and password', values.password);


    const user = { email: values.email, password: values.password };
    onLogin(user);

    setSubmitting(false);
  };

  return (
    <div>
      <h1>Login Page</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={LoginSchema}
        validateOnBlur
        validateOnChange
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}  
            </button>
            <Link to="/register"><p>Don't have an account? Register here.</p></Link>

          </Form>
        )}
      </Formik>
      <p className='alt-desc'>Inspired by Facebook!</p>
    </div>
  );
};

export default LoginPage;
