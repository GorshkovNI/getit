import React, {useState} from "react";
import './Registration.scss'
import {Modal} from "../../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {TextField} from "@mui/material";
import {Input} from "../../../../shared/Input/Input";
import {useValidation} from "../../../../hooks/useValidation/useValidation";

export const Registration = () => {

    const {t} = useTranslation();
    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(event.target.value)
    // };
    console.log('password.emailError ', email.minLengthError)
    console.log('password.isDirty ', email.maxLengthError)

    return(
        <Modal>
            <form className={'form'}>
                <h1 className={'title'}>{t('registration')}</h1>
                <Input
                    error={email.isDirty && email.emailError}
                    onBlur={() => email.handleOnBlur()}
                    type={'email'}
                    value={email.newValue}
                    onChange={email.handleNewValue}
                    placeholder={'Email'}
                    className='input' />
                <Input
                    error={password.isDirty && password.minLengthError || password.maxLengthError}
                    onBlur={() => password.handleOnBlur()}
                    type={'password'}
                    value={password.newValue}
                    onChange={password.handleNewValue}
                    placeholder={'Password'}
                    className='input' />
            </form>
        </Modal>
    )
}