import { useState, useEffect, useReducer, useCallback } from "react"

import { MedAPIurl } from "../services/baseURLs"
import { ListView } from "../components/listView"
import { Button } from '../components/button'

import { PER_PAGE_COUNT } from "../constants/index"

function prev_nextPage(currentPage, action) {
    switch (action) {
        case 'next':
            return currentPage + 1
        case 'prev':
            return currentPage !== 0 ? currentPage - 1 : currentPage
    }
}

//problems
// two states i.e currentPageItems and currentPage are updated, that is why this
//component which is a parent component re-renders twice.

export function MedDashboard() {
    const [medData, setMedData] = useState([])
    const [currentPageItems, setCurrPageItems] = useState([])
    const [currentPage, setCurrentPage] = useReducer(prev_nextPage, 0)

    //passing anonymus function as a prop can cause the child component to re-render
    //because every time the parent re-renders the anonymus function is re-created and the reference of the function changes
    //which causes the child to re-render 
    //so useCallback to memoize the anonymus function
    const next = useCallback(() => setCurrentPage('next'), [])
    const prev = useCallback(() => setCurrentPage('prev'), [])

    //function to request the data from the api
    useEffect(() => {
        MedAPIurl.get('posts')
            .then(resolve => {
                //returing this passes it on to the next then block of the promise
                return resolve.data
            })
            .then(data =>{
                paginate(data)
                setMedData(data)
            })
            .catch(error => {
                console.log(error)
                // check the status code and accordingly handle the error
            })
    }, [])

    //slice(currentPage*perPage, (currentPage*perPage)+perPage)
    //paginate
    const paginate = (data)=>{
        if (data.length !== 0) {
            setCurrPageItems(data.slice(currentPage * PER_PAGE_COUNT, (currentPage * PER_PAGE_COUNT) + PER_PAGE_COUNT))
        }
    }
    useEffect(() => {
        paginate(medData)
    }, [currentPage])

    return <><div className="content med-content" >
        {currentPageItems.length !== 0 ? currentPageItems.map((items) => {
            return <ListView key={items.id} data={items} ></ListView>
        }) : <h1 className="loader">Loading...</h1>}
    </div>
        <Button handleEvents={next} classStyle="btn next-btn">next</Button>
        <Button handleEvents={prev} classStyle="btn prev-btn">prev</Button>
    </>
}