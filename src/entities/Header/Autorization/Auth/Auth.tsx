import React, {FC, useState} from "react";
import './Auth.scss'
import {Modal} from "../../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/Input/Input";
import {useValidation} from "../../../../hooks/useValidation/useValidation";
import {Button} from "../../../../shared/Button/Button";

interface IAuth{
    className?: string,
    onToggleComponent?: () => void
}

export const Auth:FC<IAuth> = ({className, onToggleComponent}) => {

    const {t} = useTranslation();


    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})


    return(
        <div className={className}>
            <h1 className={'title'}>{t('auth')}</h1>
            <form className={'form'}>
                <Input
                    error={email.isDirty && email.emailError}
                    onBlur={() => email.handleOnBlur()}
                    type={'email'}
                    value={email.newValue}
                    onChange={email.handleNewValue}
                    placeholder={t('email')}
                    className='input' />
                <Input
                    error={password.isDirty && password.minLengthError || password.maxLengthError}
                    onBlur={() => password.handleOnBlur()}
                    type={'password'}
                    value={password.newValue}
                    onChange={password.handleNewValue}
                    placeholder={t('password')}
                    className='input'
                    minLength={3}
                    maxLength={20}
                />
                <Button className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
            </form>
        </div>
    )
}