import React, { useState } from 'react'
import styles from './signup.module.css'
import Input from '../Input'
import Title from '../Title'
import Button from '../../Widgets/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PasswordStrengthBar from 'react-password-strength-bar'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = ({ onClick }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || !email.includes('@') || !email.includes('.')) {
      if (!email) {
        toast.error('Enter valid email!')
      } else if (!email.includes('@')) {
        toast.error("'@' is Missing!")
      } else if (!email.includes('.')) {
        toast.error("'.' is Missing!")
      }
      return
    }

    if (password.length < 4 || password.length > 20) {
      if (password.length < 4) {
        toast.error('Password should be greater than 4 characters')
      } else {
        toast.error('Password should be less than 20 characters')
      }
      return
    }

    try {
      const res = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password
      })
      console.log('signup response', res.data)
      toast.success('Signup successful!')
      navigate('/signin')
    } catch (err) {
      console.error('signup error', err?.response?.data || err.message)

      const msg = err?.response?.data?.error || err.message

      if (msg.includes('E11000')) {
        toast.error('Email already registered. Try signing in instead.')
      } else {
        toast.error('Signup failed. Try again!')
      }
    }
  }

  return (
    <div className={styles.SignIn}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <h1>Take a Deep Dive!</h1>
          </div>
        </div>

        <div className={styles.formContainer}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            containerStyle={{
              right: '-620px',
              top: '30px'
            }}
            toastOptions={{
              style: {
                border: '1px solid #282828ff',
                boxShadow: '0 0 10px #282828ff'
              },
              success: {
                style: {
                  backgroundColor: 'black',
                  color: 'green'
                }
              },
              error: {
                style: {
                  backgroundColor: 'black',
                  color: '#ff4a4a'
                }
              }
            }}
          />
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Title title="Sign Up" />
            <Input
              title="Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              title="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              title="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div style={{ width: '90%', margin: '0px 20px 25px 22px ' }}>
              <PasswordStrengthBar
                minLength={2}
                shortScoreWord={false}
                scoreWords={false}
                scoreWordStyle={false}
                barColors={[
                  '#000000ff',
                  '#ff2810ff',
                  '#ffa91fff',
                  '#2596ffff',
                  '#08ff98ff'
                ]}
                password={password}
              />
            </div>

            <Button text="Sign Up" type="submit" />
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button text="Cancel" />
            </Link>

            <div className={styles.redirect}>
              Already have an Account?{' '}
              <span onClick={onClick}>
                <Link id={styles.signin} to="/signin">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
