import classnames from 'classnames';
import './../Styles/Input.css';

export default function Input(props) {
    const { error, disabled, helperText, icon,iconPosition, size, color, fullWidth, multiline ,maxRows} = props;
    const className = classnames(
        'input',
        error && 'error',
        disabled && 'disabled',
        size && `size-${size}`,
        color && `color-${color}`,
        fullWidth && 'full-width',
        multiline && 'multiline',
        icon && `icon-${icon}`
    );

    return (
        <>
            {multiline ? (
                <textarea className={className} maxRows={maxRows} {...props} />
            ) : (
                <input className={className} {...props} />
            )}
            {helperText && <div className="helper-text">{helperText}</div>}
            
        </>
    );
}
