import React, {FC, useState} from "react";
import styles from  './Registration.module.css'
import {useTranslation} from "react-i18next";
import {Input} from "@shared/Input/Input";
import {useValidation} from "@src/hooks/useValidation/useValidation";
import {Button} from "@shared/Button/Button";
import {IUserCreate} from "@store/user/userInteface";
import {createUser} from "@store/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@src/@types/dispatch"
import {getError, getIsLoading} from "@store/user/userSelector";
import {Preloader} from "@shared/Preloader/Preloader";
import {TranslationKeys} from "@src/i18n";



interface IRegistration{
    className?: string,
    onToggleComponent?: () => void
}

export const Registration:FC<IRegistration> = ({className, onToggleComponent}) => {

    const {t} = useTranslation();
    const dispatch: AppDispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)
    const errorMessage = useSelector(getError)

    let errorKey: TranslationKeys = '';
    switch(errorMessage) {
        case 'exists':
            errorKey = 'exists';
            break;
    }

    console.log(isLoading)
    console.log(errorMessage)

    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})
    const name = useValidation('', {isEmpty: true})
    const phone = useValidation('', {isEmpty: true})

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const userData: IUserCreate = {
            name: name.newValue,
            email: email.newValue,
            password: password.newValue,
            phone_number: phone.newValue
        };
        dispatch(createUser(userData));
    };

    const readySubmit = (): boolean => {
        if(!name.isEmptyError && !email.emailError && !password.minLengthError && !password.maxLengthError){
            return false
        }
        return true
    }

    if(isLoading === 'pending'){
        return <Preloader />
    }

    return(
        <div className={className}>
            <h1 className={'title'}>{t('registration')}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    error={name.isDirty && name.isEmptyError}
                    onBlur={() => name.handleOnBlur()}
                    type={'text'}
                    value={name.newValue}
                    onChange={name.handleNewValue}
                    placeholder={t('name')}
                    className={styles.input}
                />
                <Input
                    error={email.isDirty && email.emailError}
                    onBlur={() => email.handleOnBlur()}
                    type={'email'}
                    value={email.newValue}
                    onChange={email.handleNewValue}
                    placeholder={t('email')}
                    className={styles.input}
                />
                <Input
                    type={'phone'}
                    value={phone.newValue}
                    onChange={phone.handleNewValue}
                    placeholder={t('phone')}
                    className={styles.input}
                />
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
                {errorMessage && <span className={styles.error}>{t(errorKey)}</span> }
                <Button disabled={readySubmit()} className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
            </form>
        </div>
    )
}