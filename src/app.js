import React, { useState } from "react";
import logo from '../public/images/image.png';

const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>Some title</h1>
            <img src={logo} alt="logo" style={{width: 200, height: 200}}/>
            <form>
                <input
                type="text"
                value={value}
                onChange={handleChange}
                />
            </form>
            {value && <p>{value}</p>}
        </div>
    );
}

export default Form;