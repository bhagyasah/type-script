import { User,UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
 
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    
   const input = this.parent.querySelector('input');
   if (input) {
     console.log('input element', input)
    const name = input.value;
    console.log('name is', name)
    this.model.set({name: name})
   }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <input placeholder="Enter Name..." /> 
        <button class="set-name">Change Name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save</button>
      </div>
    `
  }

  
}