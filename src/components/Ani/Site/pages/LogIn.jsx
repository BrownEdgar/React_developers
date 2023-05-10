import React from 'react'
import { Formik,Field,ErrorMessage,Form } from 'formik'
import * as yup from 'yup'
import "./LogIn.scss"

const validationSchema = yup.object({
	email: yup.string().required().email("must be email"),
	password: yup.string().required().min(6).matches(/[0-9]/)
})

const initialValues = {
	email: '',
	password: '',
}
export default function LogIn() {
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
        >

        {(formik) => {
				return (
					<Form>
                        
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
							<input type="submit" value="Log In" id='submit' disabled={!formik.isValid}/>
						</div>
					</Form>
				)
			}}   
        </Formik>
    </div>
  )
}
