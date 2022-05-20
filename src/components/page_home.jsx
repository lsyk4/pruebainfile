import './page_home.sass'
import LoginForm from './form_login';
export default function Pagehome(){
    return(
        <>
            <div className="col-12 col-md-6 text-center">
                <h1>Bienvenido</h1>
            </div>
            <div className="col-12 col-md-6">
                <LoginForm />
            </div>
        </>
    );
}