import React, {FC, useEffect, useState} from "react";
import styles from './AddAdvertisement.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "@store/advertisement/advertisementSlice";
import {AppDispatch} from "@src/@types/dispatch";
import {getAllCategory} from "@store/advertisement/advertisementSelector";
import {CategoryList} from "@src/pages/AddAdvertisement/entities/CategoryList/CategoryList";
import {Category} from "@src/pages/AddAdvertisement/interface";
import {CreateAd} from "@src/pages/AddAdvertisement/entities/CreateAd/CreateAd";
import {Cars} from "@src/pages/AddAdvertisement/entities/Category/Cars/Cars";



interface IFields{
    id: string,
    name: string,
    type: string,
    options?:string
}

interface ICreateAd{
    fields: IFields[]
}


function currentCategory(category: string, fields: []){
    console.log('category: ', category)
    switch (category){
        case "Cars":
            console.log('Render Cars')
            return <Cars />

        default:
            console.log('Render CreateAd')
            return fields.length > 0 ? <CreateAd fields={fields} /> : null
    }
}


export const AddAdvertisement:FC = () => {

    const [activePath, setActivePath] = useState<Category[]>([]);

    const handleCategorySelect = (selectedCategory: Category, index: number) => {
        setActivePath(prevPath => [...prevPath.slice(0, index), selectedCategory]);
        // if(!selectedCategory.children){
        //
        // }
    }

    console.log(activePath)
    console.log(activePath[activePath?.length - 1]?.name)
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
            {/*{activePath[activePath.length - 1]?.customFields && activePath[activePath.length - 1]?.customFields.length > 0 &&*/}
                <div className={styles.fieldsContainer}>
                    {/*<CreateAd fields={activePath[activePath.length - 1]?.customFields} />*/}
                    {currentCategory(activePath[activePath?.length - 1]?.name,
                        activePath[activePath.length - 1]?.customFields ? activePath[activePath?.length - 1]?.customFields : [])}
                </div>
             {/*}*/}
        </div>

    )
}