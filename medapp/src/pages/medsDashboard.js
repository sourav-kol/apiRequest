import { useState, useEffect } from "react"

import { MedAPIurl } from "../services/baseURLs"
import { ListView } from "../components/listView"

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export function MedDashboard() {
    const [medData, setMedData] = useState([])
    //function to request the data from the api

    const displayToast = ()=>{
        toast.info("list clicked")
    }

    useEffect(() => {
        MedAPIurl.get('sample-data')
            .then(resolve => {
                setMedData(resolve.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return <><div className="content med-content" >
        {medData.map(items => {
            return <ListView  data={items} toastCall={displayToast}></ListView>
        })}
    </div>
    <ToastContainer autoClose={3000}/>
    </>
}