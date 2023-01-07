import { Course } from './../models/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  @Input() courses: Course[] = []
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)

  readonly displayedColumns: string[] = ['name', 'category', 'actions']

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void{
    this.add.emit(true)
  }

  onEdit(course: Course): void{
    this.edit.emit(course)
  }

}
