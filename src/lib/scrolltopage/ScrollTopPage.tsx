import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollTopPage() {
    const { pathname }: any = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default ScrollTopPage