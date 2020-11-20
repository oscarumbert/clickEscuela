import { GradesService } from './../../../services/grades.service';
import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/Grade';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {

  public grades: Grade[];

  constructor(gradeService: GradesService) 
  { 
    this.grades=gradeService.gradesList;
   
  }

  ngOnInit()
  {
    console.log(this.grades)
  }

}