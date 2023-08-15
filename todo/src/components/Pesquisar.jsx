const Pesquisar = ({pesquisar, setPesquisar}) => {
  return (
    <div className="pesquisar">
        <h2>Pesquisar</h2>
        <input type="text" value={pesquisar} onChange={(e) => setPesquisar(e.target.value)} placeholder="Pesquisar"/>
    </div>
  )
}

export default Pesquisar
