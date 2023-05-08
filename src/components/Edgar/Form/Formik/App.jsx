import { useFormik,Formik,Field,ErrorMessage,Form } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'

import '../App.scss'

const validationSchema = yup.object({
	username: yup.string().required().min(2),
	email: yup.string().required().email("must by email"),
	password: yup.string().required().min(6).max(18),
	language: yup.string().required(),
	message: yup.string(),
	gender: yup.string().required(),
	date: yup.date().required()
})

const initialValues = {
	username: '',
	email: '',
	password: '',
	language: '',
	message: '',
	gender: '',
	date: ''
}


export default function App() {
	


	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			console.log(e)
		})
		return () => {
			window.removeEventListener('scroll', (e) => {
				console.log(e)
			})
		}
	}, [])
	
	const handleSubmit = (values, {resetForm}) => { 
		
		console.log(values)
		resetForm()
	}

	return (
		<div className='wrapper'>
			<Formik 
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
				validateOnChange={false}
				validateOnBlur={true}
			>
			{(formik) => {
					console.log(formik)
				return (
					<Form>
						<div>
							<Field type="text" name='username' id='username'/>
							{/* {(formik.touched.username && formik.errors?.username) &&
							<p className='error'>{formik?.errors?.username}</p>} */}
							<ErrorMessage name='username' component='p' className='error'/>
						</div>
						<div>
							<Field type="email" name='email' id='email' />
							<ErrorMessage name='email'>
								{(errmesg) => <div>
									<p className='error' >{errmesg}</p>
									</div>}
							</ErrorMessage>

						</div>
						<div>
							<Field type="password" name='password' id='password' />
							<ErrorMessage name='password' component='p' className='error' />
						</div>
						<div>
							<Field type="date" name="date" /> 
						</div>
						<div>
							<Field
								name="language"
								id="language"
								as="select"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value="html5">html5</option>
								<option value="css3">css3</option>
								<option value="javascript">javascript</option>
								<option value="react.js">react.js</option>
							</Field>
							<Field type="radio" name="gender" value="male"/> male
							<Field type="radio" name="gender" value="female"/> female
							<Field 
								as="textarea" 
								placeholder="your message" 
								rows={10} 
								cols={20} 
								name="message"
								maxLength={40}
								/>
						</div>
						<div>
							<input type="submit" value="Register"  disabled={!formik.isValid}/>
						</div>
					</Form>
				)
			}}
			</Formik>
	
		</div>
	)
}



