import { useState, useEffect } from "react"
import './Main.css'

export default function Main() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className="imagesContainer">
            {data?.map(item => <img src={item.url} />)}
        </div>
    )
}

