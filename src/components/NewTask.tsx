import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nota tarefa"
      />


      <button type='submit'>
        Criar
        <PlusCircle size={18} />
      </button>

    </div>
  )
}