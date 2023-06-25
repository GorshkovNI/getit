import {useEffect, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light' )

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    return { theme, setTheme }
}