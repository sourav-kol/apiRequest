import { useState, useEffect } from "react"

export function ListView({ data, toastCall }) {
    const [keyList, setKeyList] = useState([])
    
    //considering values are always of premitive data types
    useEffect(() => {
        setKeyList(Object.entries(data))
    }, [])

    return <div className="list-container" onClick={toastCall}>
        {keyList.map(items => {
            return items[0] == "medName" ? <h1>{items[1]}</h1> : <h3>{items[1]}</h3>
        })}
    </div>
}