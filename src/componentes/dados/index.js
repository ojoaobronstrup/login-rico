export default function dados ({nome, conta}) {
    return (
        <div className="w-[100vw] h-[10vh] flex items-center">
            <div className="m-3">
                <h4 className="uppercase">{nome}</h4>
                <h2 className="uppercase text-[26px]">{conta}</h2>
            </div>
            <img/>
        </div>
    )
}