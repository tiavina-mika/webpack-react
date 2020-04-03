import React, { useState } from "react";

const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>Some title</h1>
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