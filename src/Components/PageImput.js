import React from 'react'
import Input from './Input'
import './../Styles/PageInput.css'

export const PageImput = () => {
    return (
        <>
            <div className='PageInputContainer'>
                <h1>Input</h1>
                <div>
                    <div className='InputBasicos'>
                        <h2>Default</h2>
                        <Input />
                        <h2>error</h2>
                        <Input error={true} />
                        <h2>disabled</h2>
                        <Input disabled={true} /> 
                    </div>

                    <div className='InputHelper'>
                        <h2>helperText</h2>
                        <Input helperText="Este es un ejemplo de texto de ayuda" />
                        <Input helperText="Este es un ejemplo de texto de ayuda" />
                        <Input helperText="Este es un ejemplo de texto de ayuda" />
                    </div>

                    <div className='InputIcons'>
                        <h2>icon</h2>
                        <Input icon="left" />
                        <Input icon="right" />
                    </div>
                    
                    <div className='inputSize'>
                        <h2>size</h2>
                        <Input size="sm" />
                        <Input size="md" />
                        <Input size="lg" />
                        <h2>fullWidth</h2>
                        <Input fullWidth={true} />
                    </div>

                    <div className='inputColor'>
                        <h2>color</h2>
                        <Input color="primary" />
                        <Input color="secondary" />
                    </div>

                    <div className='inputMultiline'>
                        <h2>multiline</h2>
                        <Input multiline={true} />
                    </div>
                </div>
            </div>
        </>
    )
}
