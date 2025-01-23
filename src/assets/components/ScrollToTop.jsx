import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function scrollToTop () {
    const {pathname} = useLocation(); 
    useEffect (() => {
        window.scrollTo(0,0);
    });
    useEffect (() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [pathname]);
}