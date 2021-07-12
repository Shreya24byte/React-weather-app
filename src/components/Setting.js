import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Setting(props) {
    const user = props.user;
    const setUser = props.setUser;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState("Bangalore");
    function signIn(){
        setUser(prevState => ({
            ...prevState, userName:name, userLocation:location
        }))
    }
    console.log(user);
    return (
    <div className="card text-center mx-auto my-5 shadow p-3 mb-5 bg-body rounded-3" id="logIn">
  <div className="card-body">
  <i className="far fa-user-circle text-primary fa-5x"></i>
    <h2 className="card-title fw-bold">Log In </h2>
    <div className="d-grid mx-auto  w-50 mt-5">
    <input data-testid="inputName" className="form-control form-control-lg my-3 bg-light" type="text" placeholder="Name" aria-label=".form-control-lg example" onChange={(e) => setName(e.target.value)}></input>
    <input className="form-control form-control-lg my-3 bg-light" type="email" placeholder="Email" aria-label=".form-control-lg example" onChange={(e) => setEmail(e.target.value)}></input>
    <input data-testid="inputLocation" className="form-control form-control-lg my-3 bg-light" type="text" placeholder="Location" aria-label=".form-control-lg example" onChange={(e) => setLocation(e.target.value)}></input>
    <Link to="/">
    <button data-testid="sign-in" type="button" class="btn btn-primary btn-lg btn-block my-5" onClick={signIn}>Sign In</button>
    </Link>
    </div>
  </div>
</div>
    )
}

export default Setting
