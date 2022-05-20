// https://candidates-exam.herokuapp.com/api/v1/auth/login
import { useState } from "react";
import axios from "axios";
export default function LoginForm(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const semail = (e) =>{
        setEmail(e.target.value);
    }
    const spassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://candidates-exam.herokuapp.com/api/v1/auth/login",{
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    return(
        <>
            <div className="card">
                <div className="card-header">Ingresar</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input onChange={semail} type="email" className="form-control" id="email" placeholder="Ingrese su email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input onChange={spassword} type="password" className="form-control" id="pwd" placeholder="Ingrese su password" name="pswd" />
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </form>
                </div>
            </div>
        </>
    );
}