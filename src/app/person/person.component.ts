import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../app.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person!: Character

  delete: boolean = false

  onDelete = () => {
    this.delete = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
