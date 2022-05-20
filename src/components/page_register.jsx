import axios from "axios";
import React, {useState} from "react";
export default function PageRegister(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    function handleChangeNombre(e){
        setName(e.target.value);
    }
    function handleChangeEmail(e){
        setEmail(e.target.value);
    }
    function handleChangePassword(e){
        setPassword(e.target.value);
    }
    function handleChangeCpassword(e){
        setCpassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://candidates-exam.herokuapp.com/api/v1/usuarios",{
            nombre: name,
            email: email,
            password: password,
            password_confirmation: cpassword
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>Registrarse</h3>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input onChange={handleChangeNombre} type="name" className="form-control" id="name" placeholder="Nombre" name="name"/>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input onChange={handleChangeEmail} type="email" className="form-control" id="email" placeholder="Email" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input onChange={handleChangePassword} type="password" className="form-control" id="pwd" placeholder="Password" name="pswd"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Confirmar password:</label>
                    <input onChange={handleChangeCpassword} type="password" className="form-control" id="pwd" placeholder="Confirmar password" name="cpswd"/>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </>
    );
}