import { Component } from '@angular/core';

export interface Character {
  firstName: string
  lastName: string
  age: number
  selectEmoj: string
  selectWork: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  persons: Array<any> = []

  firstName: string = ''
  lastName: string = ''
  age: any = ''
  selectEmoj: string = ''
  selectWork: string = ''

  onReady = () => {
    const person: Character = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      selectEmoj: this.selectEmoj,
      selectWork: this.selectWork
    }

    this.persons.push(person)

    this.firstName = this.lastName = this.age = this.selectWork = this.selectEmoj = ''
  }
}
