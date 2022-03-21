export function ListView({ data }) {
    return <div className="list-container" >
        {Object.entries(data).map(items => {
            const [key, value] = items
            return <>
                {/* <h1>{key}</h1> */}
                <h3 key={value}>{value}</h3>
            </>
        })}
    </div>
}