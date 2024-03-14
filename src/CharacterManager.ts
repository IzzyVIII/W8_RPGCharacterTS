
import { Managing, ManagingWeapon, Weapon }  from './types';
import {v4 as uuidv4 } from 'uuid'; 

export class Character {
    private _id: string;
    public weapon: Weapon | undefined
    constructor(
        public name: string,
        public description: string,
        public weaponId: string,
    ) {  
        this._id = uuidv4()
    }
    
    get id(): string {
        return this._id
    } 
    
}



export class TaskManager implements Managing<Character | string>, ManagingWeapon<Weapon | string>{
    tasks: Character[] = [];
    weapons: Weapon[] = [];

    addWeapon(weapon: Weapon): void {
        this.weapons.push(weapon);
        console.log(this.weapons);
        this.updateWeaponList();
        
    }
    removeWeapon(weaponId: string): void {
        const index = this.weapons.findIndex(weapon => weapon.id === weaponId);
        if (index !== -1) {
            this.weapons.splice(index, 1);
        };
        this.updateWeaponList();
    }

    private updateWeaponList() {
        const container = document.getElementById('category') as HTMLElement;
        const weapList = document.getElementById('weaponList') as HTMLElement;

        // Clear existing task list
        container.innerHTML = '';
        weapList.innerHTML = '';

        // Add each task to the task list
        
        this.weapons.forEach(weapon => {
            // Generate HTML for a task card
            const weaponHTML = `
                <option value='${weapon.name}' id='${weapon.id}'>${weapon.name}</option>
            `;

            // Append task card HTML to the HTML variable
            container.insertAdjacentHTML('beforeend', weaponHTML)

            const weaponCardHTML = `
            <div class="card mb-3 rounded">
                <div class="card-body">
                    <h5 class="card-title">Title: ${weapon.name}</h5>
                    <p class="card-text">Description: ${weapon.description}</p>
                    <button type="button" class="btn btn-danger btn-sm" data-task="${weapon.id}">Remove</button>
                </div>
            </div>
        `;

            weapList.insertAdjacentHTML('beforeend', weaponCardHTML)
        });
        
        //  /TODO: display weapon list and delete option
        weapList.querySelectorAll('.btn-danger').forEach(button => {
            button.addEventListener('click', () => {
                const weaponId = button.getAttribute('data-task');
                if (weaponId) {
                    this.removeWeapon(weaponId); // Call removeTask method with the taskId
                }
            });
        });
        
    }

    addTask(task: Character) {
        const weapon = this.weapons.find(weapon => task.weaponId === weapon.id);
        task.weapon = weapon;
        console.log(task);        
        this.tasks.push(task);
        this.updateTaskList(); 
    }

    removeTask(taskId: string) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        };
        this.updateTaskList();
    }
    
    private updateTaskList() {
        const container = document.getElementById('tasks') as HTMLElement;

        // Clear existing task list
        container.innerHTML = '';

        // Add each task to the task list
        
        this.tasks.forEach(task => {
            // Generate HTML for a task card
            const taskCardHTML = `
                <div class="card mb-3 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${task.name}</h5>
                        <p class="card-text">Description: ${task.description}</p>
                        <p class="card-text">Deadline: ${task.weapon?.name}</p>
                        <button type="button" class="btn btn-danger btn-sm" data-task="${task.id}">Remove</button>
                    </div>
                </div>
            `;

            // Append task card HTML to the HTML variable
            container.insertAdjacentHTML('beforeend', taskCardHTML)
        });
        
         // Add event listener to handle task removal
         container.querySelectorAll('.btn-danger').forEach(button => {
            button.addEventListener('click', () => {
                const task = button.getAttribute('data-task');
                if (task) {
                    this.removeTask(task); // Call removeTask method with the taskId
                }
            });
        });
        
    }

}