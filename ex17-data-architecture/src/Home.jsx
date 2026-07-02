import { useState } from "react"
import First from "./components/First";

function Home(){

    const [message, setMessage]= useState('Hello react');

    return (
        <div>
            <h2>HOME</h2>
            <p>message: <strong>{message}</strong></p>

            <First message={message} setMessage={setMessage}></First>
        </div>
    )
}
export default Home