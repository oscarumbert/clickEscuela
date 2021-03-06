import { Component, OnInit } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';
import { trabajoPractico } from '../../commons/data';
import { examen } from '../../commons/data2';
import { tareas } from '../../commons/data3';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  dashBoardsProperties: Dashboardproperties[] = new Array(0);
  dashBoardsProperties1: Dashboardproperties[] = new Array(0);
  dashBoardsProperties2: Dashboardproperties[] = new Array(0);
  nameComponent = "Cursos"

  constructor() { }

  ngOnInit() {

    this.dashBoardsProperties.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

    this.dashBoardsProperties1.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties1.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties1.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties1.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

    this.dashBoardsProperties2.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties2.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties2.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties2.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

  }

}
