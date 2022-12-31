import React from 'react'
import Input from './../Components/Input'

import { FaBeer } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { MdDisabledByDefault } from 'react-icons/md';
import { FaHireAHelper } from 'react-icons/fa';
import { GiResize } from 'react-icons/gi';
import { CgDisplayFullwidth } from 'react-icons/cg';
import { BsInputCursorText } from 'react-icons/bs';

import './../Styles/PageInput.css'

export const PageImput = () => {
    return (
        <>
            <div className='PageInputContainer'>
                <h1>Inputs <BsInputCursorText/> </h1>
                <div>
                    <div className='InputBasicos'>
                        <h2>Default </h2>
                        <Input placeholder="Input Default"/>
                        <h2>Error <BiError/> </h2>
                        <Input error={true} placeholder="Input Error" />
                        <h2>Disabled <MdDisabledByDefault/></h2>
                        <Input disabled={true} placeholder="Input Desahbilitado" /> 
                    </div>

                    <div className='InputHelper'>
                        <h2>HelperText </h2>
                        <Input helperText="Este es un ejemplo de texto de ayuda" placeholder="Input Helper" />
                        <Input helperText="Este es un ejemplo de texto de ayuda" placeholder="Input Helper" />
                        <Input helperText="Este es un ejemplo de texto de ayuda" placeholder="Input Helper" />
                    </div>

                    <div className='InputIcons'>
                        <h2>Icon <FaBeer /> </h2>
                        <Input icon={<FaBeer />} iconPosition="left" placeholder="Input Icon" />
                        <Input icon={<FaBeer />} iconPosition="right" placeholder="Input Icon" />
                        
                    </div>
                    
                    <div className='inputSize'>
                        <h2>Size <GiResize/></h2>
                        <Input size="sm" placeholder="Input Pequeño" />
                        <Input size="md" placeholder="Input Mediano" />
                        <Input size="lg" placeholder="Input Grande" />
                        <h2>fullWidth <CgDisplayFullwidth/></h2>
                        <Input fullWidth={true} placeholder="Input full tamaño" />
                    </div>

                    <div className='inputColor'>
                        <h2>Color</h2>
                        <Input color="primary" placeholder="Input color primario" />
                        <Input color="secondary" placeholder="Input color secudandario" />
                    </div>

                    <div className='inputMultiline'>
                        <h2>Multiline</h2>
                        <Input multiline={true} maxRows={4} placeholder="Input multilinea" />
                    </div>
                </div>
            </div>
        </>
    )
}
