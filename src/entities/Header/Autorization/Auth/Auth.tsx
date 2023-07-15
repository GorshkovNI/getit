import React, {FC, useState} from "react";
import styles from './Auth.module.css'
import {useTranslation} from "react-i18next";
import {Input} from "@shared/Input/Input";
import {useValidation} from "@src/hooks/useValidation/useValidation";
import {Button} from "@shared/Button/Button";
import {IUserCreate, IUserLogin} from "@store/user/userInteface";
import {login} from "@store/user/userSlice";
import {AppDispatch} from "@src/@types/dispatch";
import {useDispatch, useSelector} from "react-redux";
import {getError, getIsLoading} from "@store/user/userSelector";
import {TranslationKeys} from "@src/i18n";
import {Preloader} from "@shared/Preloader/Preloader";

interface IAuth{
    className?: string,
    onToggleComponent?: () => void,
    closeModal: () => void
}

export const Auth:FC<IAuth> = ({className, onToggleComponent, closeModal}) => {

    const {t} = useTranslation();
    const dispatch: AppDispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    let errorKey: TranslationKeys = '';
    switch(error) {
        case 'notExists':
            errorKey = 'notExists';
            break;
    }

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

    if(isLoading === 'pending'){
        return <Preloader />
    }

    return(
        <div className={className}>
            <h1 className={styles.title}>{t('auth')}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    error={email.isDirty && email.emailError}
                    onBlur={() => email.handleOnBlur()}
                    type={'email'}
                    value={email.newValue}
                    onChange={email.handleNewValue}
                    placeholder={t('email')}
                    className={styles.input} />
                <Input
                    error={password.isDirty && password.minLengthError || password.maxLengthError}
                    onBlur={() => password.handleOnBlur()}
                    type={'password'}
                    value={password.newValue}
                    onChange={password.handleNewValue}
                    placeholder={t('password')}
                    className={styles.input}
                    minLength={3}
                    maxLength={20}
                />
                <Button disabled={readySubmit()} className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
                {error ? <span className={styles.error}>{t(errorKey)}</span>: ""}
            </form>
        </div>
    )
}