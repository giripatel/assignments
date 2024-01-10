

export default function BusinessCard ({details}) {
    return (
        <>
        <div>
            {details.map((data,index) => {
                return(
                <div key={index} style={{border : "10px", backgroundColor : "cyan"}}>
                <h1>{data.name}</h1>
                <h3>{data.description}</h3>
                <button>LinkdIn</button>
                <button>Twitter</button>
                <button>Instagram</button>
                </div>
                )
            })}
        </div>
        </>
    )
}