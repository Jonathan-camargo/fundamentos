import Styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={Styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}