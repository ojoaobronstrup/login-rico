export default function senha ({num1, num2, num3, num4, num5, apaga}) {
    return (
        <div className="h-[20vh] bg-purple-200 grid grid-cols-3 grid-rows-2 gap-[1em]">
            <h1 className="col-start-1 col-end-2 bg-laranja flex items-center justify-center">{num1}</h1>
            <h1 className="col-start-2 col-end-3 bg-laranja flex items-center justify-center">{num2}</h1>
            <h1 className="col-start-3 col-end-4 bg-laranja flex items-center justify-center">{num3}</h1>
            <h1 className="col-start-1 col-end-2 bg-laranja flex items-center justify-center">{num4}</h1>
            <h1 className="col-start-2 col-end-3 bg-laranja flex items-center justify-center">{num5}</h1>
            <h1 className="col-start-3 col-end-4 bg-laranja flex items-center justify-center">{apaga}</h1>
        </div>
    )
} 