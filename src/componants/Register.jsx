import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const { creatUser ,updateUserProfile} = useContext(AuthContext)
    // console.log(authInfo)
    const [registerError, setRegisterError] = useState('');
    const [regiSuccess, setRegiSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo)

        // reset error
        setRegisterError('')
        setRegiSuccess('')

        if (password.length < 6) {
            setRegisterError(' Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one uppercase character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('your password should have at least one lowercase character');
            return;
        }


        creatUser(email, password)
            .then(result => {
                // console.log(result.user)
                updateUserProfile(name,photo)
                .then()
                toast.success('Register succesfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }



    return (
        
        <div className="hero bg-base-200 ">
            <Helmet>
                <title>DreamHomeHub/Register</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}placeholder="password" name="password" className="input input-bordered" required />
                            <span className="absolute top-[50px] right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have account? please <Link to="/login"><button className="btn btn-link">Login</button></Link>

                        </p>

                        {
                            registerError && <p className="text-red-500">{registerError}</p>
                        }
                        {
                            regiSuccess && 
                            <p className="text-green-500">{regiSuccess}</p>
                        }
                    </form>
                </div>
                <ToastContainer />
            </div>
           
        </div>
    );
};

export default Register;