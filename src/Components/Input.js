import React, { Fragment } from 'react';
import classnames from 'classnames';
import './../Styles/Input.css';

const Input = ({ variant, error, disabled, helperText, icon, iconPosition, size, color, fullWidth, multiline, maxRows, children, ...props }) => {
    const className = classnames(
        'input',
        variant && `input-${variant}`,
        {
            'input-error': error,
            'input-disabled': disabled,
            'input-sm': size === 'sm',
            'input-md': size === 'md',
            'input-lg': size === 'lg',
            'input-primary': color === 'primary',
            'input-secondary': color === 'secondary',
            'input-full-width': fullWidth,
            'input-multiline': multiline,
        }
    );

    return (
        <Fragment>
            {icon && (
                <Fragment>
                    {iconPosition === 'left' && icon}
                    {multiline ? (
                        <textarea className={className} maxRows={maxRows} {...props} />
                    ) : (
                        <input className={className} {...props} />
                    )}
                    {iconPosition === 'right' && icon}
                </Fragment>
            )}
            {!icon && (
                <Fragment>
                    {multiline ? (
                        <textarea className={className} maxRows={maxRows} {...props} />
                    ) : (
                        <input className={className} {...props} />
                    )}
                    {children}
                </Fragment>
            )}
            {helperText && <div className="helper-text">{helperText}</div>}
        </Fragment>
    );
};
export default Input;