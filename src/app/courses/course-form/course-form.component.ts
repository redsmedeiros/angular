import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    category: ['']
  })

  constructor(private formBuilder: FormBuilder, private courseService: CoursesService, private snackBar: MatSnackBar, private location: Location) {

   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form.value)
    this.courseService.save(this.form.value).subscribe( resultado => this.onSuccess(), error =>{
      this.onError()
    } )
  }

  onCancel(): void{
    this.location.back()
  }

  private onSuccess(): void{
    this.snackBar.open('Curso salvo com suceso', '', {duration: 3000})
    this.onCancel()
  }

  private onError(): void{
    this.snackBar.open('Erro ao salvar curso', '', {duration: 3000})
  }

}
