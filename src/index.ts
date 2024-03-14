//import?
import { Character, TaskManager } from './CharacterManager'; 
import {   Weapon} from './types'; 

const taskForm = document.getElementById('taskForm') as HTMLFormElement;
// // Add the new task to the task manager
const taskManager = new TaskManager()

const weaponForm = document.getElementById('weaponForm') as HTMLFormElement;

weaponForm.addEventListener('submit', (event) => {
    console.log('weaponForm');
    
    event.preventDefault(); // Prevent the default form submission behavior

    const weaponNameInput = document.getElementById('weaponName') as HTMLInputElement;
    const descriptionInput = document.getElementById('weaponDescription') as HTMLTextAreaElement;
    const weaponDamageInput = document.getElementById('weaponDamage') as HTMLInputElement;

    // Get the input values
    let weaponName = weaponNameInput.value;
    let description = descriptionInput.value;
    let weaponDamagePoint = weaponDamageInput.value;

    console.log(weaponName, description, weaponDamagePoint); // Log the input values

    // Create a new task
    const newWeapon = new Weapon(weaponName, parseInt(weaponDamagePoint), description);

    
    taskManager.addWeapon(newWeapon);

    weaponForm.reset(); 
    
});

taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskNameInput = document.getElementById('taskName') as HTMLInputElement;
    const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
    const weaponSelect = document.getElementById('category') as HTMLSelectElement;

    // Get the input values
    let taskName = taskNameInput.value;
    let description = descriptionInput.value;
    let index = weaponSelect.selectedIndex;
    let weaponId = weaponSelect.options[index].id;


    console.log(taskName, description, weaponId); // Log the input values

    // Create a new task
    const newTask = new Character(taskName, description, weaponId);

    
    taskManager.addTask(newTask);

    taskForm.reset(); 
    
});