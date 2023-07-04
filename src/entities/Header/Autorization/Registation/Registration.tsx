import React, {FC, useState} from "react";
import styles from  './Registration.module.css'
import {Modal} from "../../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/Input/Input";
import {useValidation} from "../../../../hooks/useValidation/useValidation";
import {Button} from "../../../../shared/Button/Button";
import {useAppDispatch} from "../../../../hooks/useAppDispatch/useAppDispatch";
import {IUserCreate} from "../../../../store/user/userInteface";
import {createUser} from "../../../../store/user/userSlice";
import {useDispatch} from "react-redux";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../../../../store";

interface IRegistration{
    className?: string,
    onToggleComponent?: () => void
}

export const Registration:FC<IRegistration> = ({className, onToggleComponent}) => {

    const {t} = useTranslation();
    const dispatch: ThunkDispatch<AppDispatch, RootState, AnyAction> = useDispatch();

    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})
    const name = useValidation('', {isEmpty: true})
    const phone = useValidation('', {isEmpty: true})

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const userData: IUserCreate = {
            name: 'John Doe',
            email: 'j1ohn@example.com',
            password: '123',
            phone_number: '+79123123121'
        };
        dispatch(createUser(userData));
    };

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
                <Button className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
            </form>
        </div>
    )
}