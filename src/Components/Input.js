import React from 'react'
import './../Styles/Input.css'

function Input(props) {
    const { error, disabled, helperText, icon, size, color, fullWidth, multiline } = props;
    let className = `input ${error ? "error" : ""} ${disabled ? "disabled" : ""} ${fullWidth ? "full-width" : ""} ${multiline ? "multiline" : ""}`;
    if (size) {
        className += ` size-${size}`;
    }
    if (color) {
        className += ` color-${color}`;
    }
    return (
        <>
            {multiline ? (
                <textarea className={className} {...props} />
            ) : (
                <input className={className} {...props} />
            )}
            {helperText && <div className="helper-text">{helperText}</div>}
        </>
    );
}

export default Input;
