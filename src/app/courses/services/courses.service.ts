import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http'
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(1000),
      tap(curso => console.log(curso))
    )
  }

  save(curso: Course){
    return this.httpClient.post<Course>(this.API, curso).pipe(first())
  }
}
