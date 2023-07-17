import React, {FC} from 'react'
import styles from './CategoryList.module.css'
import cn from 'classnames'
import {Category} from "@src/pages/AddAdvertisement/interface";


interface ICategoryList {
    list: Category[],
    title: string,
    activePath: Category[],
    onSelect: (selectedCategory: Category, index: number) => void,
    index?: number,
}

export const CategoryList: FC<ICategoryList> = ({list, title, activePath, onSelect, index = 0}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <ul className={styles.containerItem}>
                {list.map((item) => {
                    const isActive = activePath.some(activeItem => activeItem.id === item.id);
                    return(
                        <li
                            className={cn(styles.item, {[styles.active]: isActive})}
                            key={item.id}
                            onClick={() => onSelect(item, index)}
                        >
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
