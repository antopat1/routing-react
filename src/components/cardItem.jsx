function CardItem({title,imgURL, isVisited, children, count}) {
    return (
        <div className="rounded-md bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <img src={imgURL} className="rounded-t-md" alt="" ></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
                {isVisited ? <span className="text-green-600"> ✔️ </span> : <span className="text-red-600"> ❌ </span> }
                <br></br> 
                {isVisited && <span className="text-green-600"> ✔️ visitata </span>}
                {!isVisited && <span className="text-red-600"> ❌ non visitata </span>}
            </div>
        </div>
        
    )
}

export default CardItem;
