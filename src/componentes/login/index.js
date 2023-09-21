import Senha from './senha'

export default function login () {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="h-[50vh] bg-yellow-200 mx-3">
            <Senha num1={`${numeros[0]} ou ${numeros[1]}`}/>
        </div>
    )
}