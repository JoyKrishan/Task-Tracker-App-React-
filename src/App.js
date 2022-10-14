import Header from "./components/Header";
import Tasks from './components/Tasks'
import { useState } from "react"

 
function App() {
  const [tasks, setTask] = useState([{
    'id': 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2.30pm',
    reminder: true
  },{
    'id': 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1.30pm',
    reminder: true
  },
  {
    'id': 3,
    text: 'Food Shopping',
    day: 'Feb 7th at 2.30pm',
    reminder: true
  }])
  
  // Delete Task
  const deleteTask = (id) => setTask(tasks.filter((task) => task.id !== id)) 
    
  // Toggle Reminder 
  const toggleReminder = (id) => setTask(tasks.map((task)=> task.id === id ?{...task, reminder:false}: task))

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: <p>No Tasks to Show</p>}
    </div>
  );
}


export default App;
