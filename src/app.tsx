import React, { FunctionComponent, ChangeEvent, useState, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import logo from '../public/images/image.png';
// export interface HelloProps { name: string; }
// const Form = (props: HelloProps) => {

type FormProps = { name?: string };

const Form: FunctionComponent<FormProps> = ({ name }) => {
    const [value, setValue] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(false);

    const perso = [{ name: 'tiks' }, 'tiks'];
    console.log('perso: ', perso);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (value) setDisplay(true);
    };

    return (
        <div>
            <h1>Hello {name}</h1>
            <img src={logo} alt="logo" style={{ width: 200, height: 200 }} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
            </form>
            {display && <p>{value}</p>}
        </div>
    );
};

Form.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Form;
