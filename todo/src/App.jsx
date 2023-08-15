import { useState } from 'react';

import Todo from './components/todo.jsx';
import TodoForm from './components/TodoForm.jsx';
import Pesquisar from './components/Pesquisar.jsx';
import Filtro from './components/Filtro.jsx';

import './App.css';





function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      categoria: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      categoria: "Estudos",
      isCompleted: false,
    },
  ]);
  

  //state para pesquisar
  const [pesquisar, setPesquisar] = useState("")

  //state para ordenação
  const [filtro, setFiltro] = useState("All")
  const [ordem, setOrdem] = useState("Asc")

  //função add listas
  const addTodo = (text, categoria) => {
    //variavel que traz todos dados todos
    const novoTodo = [...todos, {
      //gerar um bnumero aleatorio
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      isCompleted: false,
    }]
    setTodos(novoTodo)
  }

  // função remove listas
  const removeTodo = (id) => {
    //variavel para filtrar o array
    const novoTodo = [...todos]
    const filtroTodo = novoTodo.filter((todo) => 
      //validação da exclução
      todo.id !== id ? todo : null
    )
    setTodos(filtroTodo)
  }

  //função completar listas
  const completaTodo = (id) => {
    //variavel para mapear as listas no array
    const novoTodos = [...todos]
    novoTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    //atualiza a lista de todos
    setTodos(novoTodos)

  }

  return (
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <Pesquisar pesquisar={pesquisar} setPesquisar={setPesquisar}/>
        <Filtro filtro={filtro} setFiltro={setFiltro} setOrdem={setOrdem}/>
        <div className='todo-list'>
          {todos
          //filtro de completo e incompleto
          .filter((todo) => filtro === "All" ? true : filtro === "Completo" ? todo.isCompleted : !todo.isCompleted)
          //filto de pesquisa
          .filter((todo) => todo.text.toLowerCase().includes(pesquisar.toLowerCase()))
          //filtro  comparação de texto de crescente e descrescente
          .sort((a, b) => ordem === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          //map para completar e remover
          .map((todo) => (
          <Todo key={todo.id} todo={todo}
          removeTodo={removeTodo}
          completaTodo={completaTodo}/>
          ))}
        </div>
        <TodoForm 
          addTodo={addTodo}
        />
      </div>
  )
}

export default App
