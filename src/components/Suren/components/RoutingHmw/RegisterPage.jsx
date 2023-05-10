import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegisterPage = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (values, { resetForm }) => {
    console.log('Registering with email', values.email, 'and password', values.password);

    const newUser = { email: values.email, password: values.password };
    setUsers([...users, newUser]);

    resetForm();
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={RegisterSchema}
        validateOnBlur
        validateOnChange
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
            <Link to="/login">Already have an Account!</Link>
          </Form>
        )}
      </Formik>

      <h2>Registered Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Email: {user.email}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterPage;



