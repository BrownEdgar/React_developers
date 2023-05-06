import { useFormik,Formik,Field,ErrorMessage,Form } from 'formik'
import React from 'react'
import * as yup from 'yup'

import '../App.scss'

const validationSchema = yup.object({
	username: yup.string().required().min(2),
	email: yup.string().required().email("must by email"),
	password: yup.string().required().min(6).max(18),
	language: yup.string().required()
})

const initialValues = {
	username: '',
	email: '',
	password: '',
	language: '',
}


export default function App() {
	const handleSubmit = (values) => { 
		console.log(values)
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
							<select
								name="language"
								id="language"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value="html5">html5</option>
								<option value="css3">css3</option>
								<option value="javascript">javascript</option>
								<option value="react.js">react.js</option>
							</select>
						</div>
						<div>
							<input type="submit" value="Register" />
						</div>
					</Form>
				)
			}}
			</Formik>
	
		</div>
	)
}
