import React, { FunctionComponent, ChangeEvent, useState, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

import logo from '../../../public/images/image.png';

// export interface HelloProps { name: string; }
// const Form = (props: HelloProps) => {
const useStyles = createUseStyles({
    wrapper: {
        padding: 40,
        background: ({ theme }) => theme.background,
        textAlign: 'left',
    },
    title: {
        font: {
            size: 40,
            weight: 900,
        },
        color: ({ theme }) => theme.color,
    },
    link: {
        color: ({ theme }) => theme.color,
        '&:hover': {
            opacity: 0.5,
        },
    },
});
type HomeProps = { name?: string };

const Home: FunctionComponent<HomeProps> = ({ name }) => {
    const [value, setValue] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(false);

    const theme = useTheme();
    const classes = useStyles({ theme });

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
        <div className={classes.wrapper}>
            <h1>Hello {name}</h1>
            <img src={logo} alt="logo" style={{ width: 200, height: 200 }} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
            </form>
            {display && <p>{value}</p>}
        </div>
    );
};

Home.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Home;
