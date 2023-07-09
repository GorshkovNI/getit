import React, {FC, useState} from "react";
import './Auth.scss'
import {Modal} from "../../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/Input/Input";
import {useValidation} from "../../../../hooks/useValidation/useValidation";
import {Button} from "../../../../shared/Button/Button";
import {IUserCreate, IUserLogin} from "@store/user/userInteface";
import {login} from "@store/user/userSlice";
import {AppDispatch} from "@src/@types/dispatch";
import {useDispatch, useSelector} from "react-redux";
import {getAllInfo} from "@store/user/userSelector";

interface IAuth{
    className?: string,
    onToggleComponent?: () => void
}

export const Auth:FC<IAuth> = ({className, onToggleComponent}) => {

    const {t} = useTranslation();
    const dispatch: AppDispatch = useDispatch()

    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})

    const readySubmit = (): boolean => {
        if(!email.emailError && !password.minLengthError && !password.maxLengthError){
            return false
        }
        return true
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const userData: IUserLogin = {
            email: email.newValue,
            password: password.newValue,
        };
        dispatch(login(userData));
    };

    const allInfo = useSelector(getAllInfo)
    console.log(allInfo)


    return(
        <div className={className}>
            <h1 className={'title'}>{t('auth')}</h1>
            <form className={'form'} onSubmit={handleSubmit}>
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
                <Button disabled={readySubmit()} className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
            </form>
        </div>
    )
}