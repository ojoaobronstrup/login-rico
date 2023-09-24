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
        <div className="h-[50vh] bg-white mt-[0.5em]">
            <Senha num1={`${pos[0]} ou ${pos[1]}`} num2={`${pos[2]} ou ${pos[3]}`} num3={`${pos[4]} ou ${pos[5]}`} num4={`${pos[6]} ou ${pos[7]}`} num5={`${pos[8]} ou ${pos[9]}`}/>
        </div>
    )
}
