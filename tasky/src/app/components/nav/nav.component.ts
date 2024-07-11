import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  taskForm!:FormGroup
  ngOnInit() {
    this.taskForm = new FormGroup({
      taskName: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      status: new FormControl("")
    })
  }
}
