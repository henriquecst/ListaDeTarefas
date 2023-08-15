import {useState} from 'react'


const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleSubmit = (e) =>  {
    e.preventDefault();
    if(!value || !categoria) return;
    //adiciona a todo
    addTodo(value, categoria)
    //limpa os campos do form
    setValue('')
    setCategoria("")

  }


  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Digite o titulo'
          value={value}
         onChange={(e) => setValue(e.target.value)}
        />
        <select 
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm