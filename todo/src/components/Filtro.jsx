const Filtro = ({filtro, setFiltro, setOrdem}) => {
  return (
    <div className="filtro">
        <h2>Filtrar:</h2>
        <div className="filtro-opcoes">
            <div>
                <p>Status:</p>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value={"All"}>Todas</option>
                    <option value="Completo">Completas</option>
                    <option value="Incompletas">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setOrdem("Asc")}>Asc</button>
                <button onClick={() => setOrdem("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filtro