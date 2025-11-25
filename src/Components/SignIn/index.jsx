import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../Context/UserContext';
import styles from './signin.module.css';
import Input from '../Input';
import Title from '../Title';
import Button from '../../Widgets/Button';

const SignIn = ({ onClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signin', { email, password });
      console.log('signin response', res.data);

      if (res.data.status === "OK") {
        setUser(res.data.user);
        console.log("Navigating to /dashboard");
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('signin error', err?.response?.data || err.message);
    }
  };

  return (
    <div className={styles.SignIn}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Title title="Sign In" />
            <Input title="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input title="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Sign In" type="submit" />
            <Link style={{ textDecoration: "none" }} to="/"><Button text="Cancel" /></Link>
            <div className={styles.redirect}>
              Don't have an Account? <span onClick={onClick}><Link id={styles.signup} to="/signup">Sign Up</Link></span>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <h1>Welcome Back!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
