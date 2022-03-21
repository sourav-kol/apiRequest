import { memo } from "react"

//added memo so that the component is memoized and will not be re-rendered un-neccessarly 
//whenever the parent re-renders
export const Button = memo(({ children, handleEvents, type, classStyle }) => {
    // console.log(`${children} ${handleEvents} ${type} ${classStyle}`)
    return <button type={type} onClick={handleEvents} className={classStyle}>{children}</button>
});