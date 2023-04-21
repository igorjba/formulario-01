import { useState } from 'react';
import CloseEye from '../../assets/close-eye.svg';
import OpenEye from '../../assets/open-eye.svg';
import './style.css';

function InputPassword({ state, handleChange }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='container-input-password'>
            <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={state}
                onChange={(event) => handleChange(event)}
            />

            <img
                className='eye-icon'
                src={showPassword ? OpenEye : CloseEye}
                alt="show password"
                onClick={() => setShowPassword(!showPassword)}
            />
        </div>
    )
}

export default InputPassword;