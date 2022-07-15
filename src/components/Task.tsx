import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Trash, PlusCircle } from "phosphor-react";

import styles from "./Task.module.css";


import clipboard from '../assets/clipboard.svg';

interface Task {
  name: string;
  completed: boolean;
}

export function Task() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, {name: newTask, completed: false}]);
    
    setNewTask('');
    console.log(tasks);
  }

  return (
    <div className={styles.task}>
      <form  onSubmit={handleCreateNewTask}className={styles.newTask}>
        <input
          type="text"
          placeholder="Adicione uma nota tarefa"
          value={newTask}
          onChange={handleNewTask}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={18} />
        </button>

      </form>
      <header>
        <div>
          <span>Tarefas criadas</span>
          <span> 0 </span>
        </div>
        <div>
          <span>Concluídas</span>
          <span> 0 </span>
        </div>
      </header>
      {tasks.length === 0 ?
        <div className={styles.emptyTask}>
          <img src={clipboard} alt="Logotipo" />
          <span className="description">
            Você ainda não tem tarefas cadastradas
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
        :
        tasks.map(task => (
          <div key={task.name} className={styles.taskList}>
            <div className={styles.input}>
              <input type="checkbox"/>
              <p>{task.name}</p>
            </div>
            <Trash size={20} />
          </div>
        ))
      }
    </div>
  )
}