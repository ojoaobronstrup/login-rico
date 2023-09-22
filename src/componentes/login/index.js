import { useState, useEffect } from 'react'
import Senha from './senha'

export default function Login() {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     const [pos, setPos] = useState(Math.floor(Math.random() * 10))
    const [setPosValue, setSetPosValue] = useState(Math.floor(Math.random() * 10))

    // Função para gerar um número aleatório diferente de pos
    const posDiferente = () => {
        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * 10);
        } while (newNumber === pos)
        return newNumber;
    }

    useEffect(() => {
        setPos(posDiferente())
        setSetPosValue(posDiferente())
    }, [])

    return (
        <div className="h-[50vh] bg-yellow-200 mx-3">
            <Senha num1={`${numeros[pos]} ou ${numeros[setPosValue]}`}/>
        </div>
    )
}
