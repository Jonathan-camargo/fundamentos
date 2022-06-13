import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            //flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto='Estiloso' destino='/estiloso'></Navegador>
            <Navegador texto='Exemplo' destino='/exemplo' cor='#9400d3'></Navegador>
            <Navegador texto='JSX'destino='/jsx' cor= 'crimson'></Navegador>
            <Navegador texto='Navegação Simples'destino='/Navegacao' cor= 'green'></Navegador>
            <Navegador texto='Navegação Dinâmica'destino='/cliente/sp-2/123' cor= 'blue'></Navegador>
        </div>
    )
}
