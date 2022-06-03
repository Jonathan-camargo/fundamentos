export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1>

    function sub() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {sub()}
            <p>
                {JSON.stringify({ nome: "João", idade: 30 })}
            </p>
        </div>
    )
}