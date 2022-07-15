import React, { useState } from "react"
import { Trash, Circle, CheckCircle } from "phosphor-react";

import styles from "./Input.module.css";

interface TaskProps {
  text: string;
  completed: boolean;
}

export function Input({ text, completed }:TaskProps) {
  const [task, setTask] = useState<TaskProps>({text, completed});

  function handleClickCheckBox() {
    setTask({...task, completed: !task.completed});
  }

  return (
    <div key={text} className={styles.task}>
      <div className={styles.input}>
        {task.completed ? 
          <CheckCircle size={20} onClick={handleClickCheckBox}/>
          :
          <Circle size={20} onClick={handleClickCheckBox}/>
        }
        <p>{task.text}</p>
      </div>
      <Trash size={20} />
    </div>
  )
}