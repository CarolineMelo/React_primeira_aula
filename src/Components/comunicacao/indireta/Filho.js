

function Filho(props) {

    function numeroSorteado() {
        return Math.random()

    }
    return (
        <button onClick={function () {

            const dormir = numeroSorteado()
            props.funcao('Coragem ; ) ', dormir)
        }}
        >

            Total De Horas Acordada
        </button>

    )

}
export default Filho