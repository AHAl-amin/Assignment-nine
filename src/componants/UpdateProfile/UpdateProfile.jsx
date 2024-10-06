import { Helmet } from "react-helmet-async";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {
 

    const { user } = useContext(AuthContext);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
       
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;

            console.log(displayName, email, photoURL)
        

        
    });
    return (
        <div>
            <Helmet>
                <title>DreamHomeHub/UpdateProfile</title>
            </Helmet>
            <div className="hero my-10">


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input defaultValue={user?.photoURL} type="text" placeholder="photo URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">update profile</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProfile;