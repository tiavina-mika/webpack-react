import React, { FunctionComponent, ChangeEvent, useState, SyntheticEvent } from "react";
import logo from '../public/images/image.png';
// export interface HelloProps { name: string; }
// const Form = (props: HelloProps) => {

type FormProps = { name?: string };

const Form: FunctionComponent<FormProps> = ({ name }) => {
    const [value, setValue] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement> )=> {
        setValue(e.target.value)
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (value) setDisplay(true);
    }

    return (
        <div>
            <h1>Hello {name} </h1>
            <img src={logo} alt="logo" style={{width: 200, height: 200}}/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </form>
            {display && <p>{value}</p>}
        </div>
    );
}

export default Form;