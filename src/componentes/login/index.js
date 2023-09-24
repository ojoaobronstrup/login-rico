import { useState, useEffect } from 'react'
import Senha from './senha'

export default function Login() {
    const [pos, setPos] = useState([])

    useEffect(() => {
        let newPos = []
        while(newPos.length < 10){
            let r = Math.floor(Math.random() * 10) //Cria um nº aleatório e armazena em "r"
            if(newPos.indexOf(r) === -1) {
                newPos.push(r)
            }
        }
        setPos(newPos)
    }, [])

    return (
        <div className="h-[49vh] bg-white mt-[0.5em] flex flex-col">
            <input type="password" className="border-b-solid border-b-[3px] border-b-laranja w-[90vw] h-[9vh] self-center"></input>
            <div className="h-[32vh] flex flex-col justify-center">
                <h3 className="mx-3 border-b-laranja border-b-solid border-b-[3px] w-[40vw]">Esqueci minha senha</h3>
                <Senha num1={`${pos[0]} ou ${pos[1]}`} num2={`${pos[2]} ou ${pos[3]}`} num3={`${pos[4]} ou ${pos[5]}`} num4={`${pos[6]} ou ${pos[7]}`} num5={`${pos[8]} ou ${pos[9]}`}/>
            </div>
            <button className="bg-laranja w-screen h-[8vh]">
                ACESSAR
            </button>
        </div>
    )
}
