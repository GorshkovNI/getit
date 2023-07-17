import React, {FC, useEffect, useState} from "react";
import styles from './AddAdvertisement.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "@store/advertisement/advertisementSlice";
import {AppDispatch} from "@src/@types/dispatch";
import {getAllCategory} from "@store/advertisement/advertisementSelector";
import {CategoryList} from "@src/pages/AddAdvertisement/entities/CategoryList/CategoryList";
import {Category} from "@src/pages/AddAdvertisement/interface";
import {CreateAd} from "@src/pages/AddAdvertisement/entities/CreateAd/CreateAd";


export const AddAdvertisement:FC = () => {

    const [activePath, setActivePath] = useState<Category[]>([]);

    const handleCategorySelect = (selectedCategory: Category, index: number) => {
        setActivePath(prevPath => [...prevPath.slice(0, index), selectedCategory]);
        // if(!selectedCategory.children){
        //
        // }
    }

    console.log(activePath)
    const dispatch: AppDispatch  = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const category = useSelector(getAllCategory)

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <CategoryList
                    list={category}
                    title={'Категории'}
                    onSelect={handleCategorySelect}
                    activePath={activePath}
                />
                {activePath.map((activeCategory, index) => (
                    activeCategory.children &&
                    <CategoryList
                        key={activeCategory.id}
                        list={activeCategory.children}
                        title={`Подкатегории для ${activeCategory.name}`}
                        onSelect={handleCategorySelect}
                        activePath={activePath.slice(index + 1)}
                        index={index + 1}
                    />
                ))}
            </div>
            {activePath[activePath.length - 1]?.customFields && activePath[activePath.length - 1]?.customFields.length > 0 &&
                <div>
                    { activePath[activePath.length - 1]?.customFields.map((item:any) => {
                        return(
                            <div>
                                {item.name}
                            </div>
                        )
                    })}
                </div>}
            <CreateAd name={'Make of car'} type={'text'} />

        </div>

    )
}