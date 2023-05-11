import React from 'react'
import { Formik,Field,ErrorMessage,Form } from 'formik'
import * as yup from 'yup'
import "./LogIn.scss"

const validationSchema = yup.object({
	username: yup.string().required().min(2),
	email: yup.string().required().email("must be email"),
	password: yup.string().required().min(6).matches(/[0-9]/)
})

const initialValues = {
	username: '',
	email: '',
	password: '',
}

export default function Registration({saveUsers}) {
    const handleSubmit = (values, {resetForm}) => { 
        console.log(values)
		saveUsers({...values})
		resetForm()		
	}


  return (
    <div className='wrapper'>
        <Formik
			initialValues={initialValues}
            onSubmit={handleSubmit}
			validationSchema={validationSchema}
        >

        {(formik) => {
				return (
					<Form>
						<div className='input'>
							<Field type="text" name='username' id='username' placeholder="username"/>
							<ErrorMessage name='username' component='p' className='error'/>
						</div>

                        <div className='input'>
							<Field type="email" name='email' id='email' placeholder="email" />
							<ErrorMessage name='email'>
								{(errmesg) => <div>
									<p className='error' >{errmesg}</p>
									</div>}
							</ErrorMessage>

						</div>
		
						<div className='input'>
							<Field type="password" name='password' id='password' placeholder="password"/>
							<ErrorMessage name='password' component='p' className='error' />
						</div>

						<div>
							<input type="submit" value="Sign Up" id='submit' disabled={!formik.isValid}	/>
						</div>
					</Form>
				)
			}}   
        </Formik>
    </div>
  )
}