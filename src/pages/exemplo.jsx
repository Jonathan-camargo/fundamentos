import Cabecalho from "../components/cabecalho";
import Layout from "../components/layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.Js & React"></Cabecalho>
            <Cabecalho titulo="Curso"></Cabecalho>
        </Layout>
    )
}