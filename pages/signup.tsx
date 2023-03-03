import axios from "axios";
import { useEffect } from "react";

export default function SignUp() {

    const handleSubmit = () => {
        axios.post('http://10.10.10.173:8081/api/v1/user/add', {
            name: 'jason',
            email: 'test@test.com',
            pwd: '1234'
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <>
        <h3>test</h3>
        <button onClick={handleSubmit}>signup</button>
        </>
    );
}