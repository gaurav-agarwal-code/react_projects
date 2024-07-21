import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(props) {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/gaurav-agarwal-code")
    //         .then(res => res.json())
    //         .then(res => {
    //             setData(res)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <div className='bg-gray-700 text-white p-4 m-4 text-center text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='github picture' width={300} />
        </div>
    )
}

export const gitInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/gaurav-agarwal-code")
    return response.json()
}
