import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loaded, setLoaded] = useState(false);
    const handleButtonClick = e => {
        setLoaded(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded]);

    if (loaded == false) {
        return (
            <div>
                <h1>Website Loading....</h1>
                <button onClick={handleButtonClick}></button>
            </div>
        )
    }


    return (
        <>
            <Greeter phrase="Good Morning" name="Jesse" />
            <Greeter phrase="Good Afternoon" name="JC" />
            <Greeter phrase="Good Night" name="Jess" />
            <h1>This is an h1 element.</h1>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" /> <br />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
            <p>You are logging in as: {username}</p>
        </>
    )
}

export default App;