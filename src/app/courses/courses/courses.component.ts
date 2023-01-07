import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { catchError, Observable, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>
  displayedColumns: string[] = ['name', 'category', 'actions']

  constructor(private courseService: CoursesService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {

    this.courses$ = courseService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    )

   }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd(): void{
    this.router.navigate(["courses/new"])
  }

  onEdit(course: Course): void{
    this.router.navigate(["courses/edit", course._id])
  }

}
