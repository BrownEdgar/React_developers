import { Field, Formik, Form } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes';


const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
}

export default function About({}) {

	const navigate = useNavigate();

	const handleSubmit = (values, {resetForm}) => {
		console.log(values)
		
		resetForm()
		navigate({pathname: ROUTES.HOME})
	 }
	return (
		<div className='Form'>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validateOnBlur={true}
				validateOnChange={true}
			>
				<Form>
					<Field type="text" name="firstname" placeholder='firstname' required/>
					<Field type="text" name="lastname" placeholder='lastname' required/>
					<Field type="email" name="email" placeholder='email' required/>
					<Field type="password" name="password" placeholder='password' required/>
					<Field type="submit" value='add user' />
				</Form>
			</Formik>
		</div>
	)
}
