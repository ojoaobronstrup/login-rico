export default function Inicio ({ esconderComponentes }) {
    function token () {
        esconderComponentes();
    }

    return (
        <div className='h-[40vh] bg-blue-900 flex flex-col justify-between'>
            <div className="flex justify-center items-center h-[32vh]">
                <img src="./img/rico.png" alt="Logo da corretora Rico" className="h-[15vh] w-[30vw]"/>
            </div>
            <div className="flex h-[3vh] justify-between mx-[1em]">
                <h4 onClick={token} className="text-white">Token</h4>
                <h4 className="text-white">Abrir conta</h4>
            </div>            
        </div>
    )
}

