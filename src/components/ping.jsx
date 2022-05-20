import { useEffect, useState } from 'react'
import axios from 'axios';
export default function Ping(){
    const [ping, setPing] = useState('')
    const fetchPing = () =>{
        var config = {
            method: 'get',
            url: 'https://candidates-exam.herokuapp.com/api/v1/ping',
            headers: { }
        };
        axios(config)
        .then(function (response) {
            setPing(response.data);
        })
    }
    useEffect(() => {
        fetchPing()
    }, []);
    return(
        <>
            Ping: {ping.tipo === true ? ping.respuesta : "El servicio no responde"}
        </>
    );
}