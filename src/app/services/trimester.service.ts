import { ReportCard } from './../models/ReportCard';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrimesterService {

  reportCardList: ReportCard[];
  mattersList =
    [
      "Matematicas", "Lengua", "Ciencias Sociales", "Ciencias Naturales", "Geografia", "Ingles", "Educacion fisica"

    ]

  constructor() {
    this.reportCardList = new Array(3);

    let reportCard = new ReportCard('Jazmin', "Fernandez",new Date);
    let reportCard2 = new ReportCard('Jazmin', "Fernandez",new Date);

    for (let mat of this.mattersList) {
      let grade = Math.random() * (10 - 1) + 1
      reportCard.loadMatter(mat, grade);
    }

    for (let mat of this.mattersList) {
      let grade = Math.random() * (10 - 1) + 1
      reportCard2.loadMatter(mat, grade);
    }

    this.reportCardList[0] = reportCard
    this.reportCardList[1] = reportCard2




  }

  get trimesterList() {
    return this.reportCardList
  }

  loadMatters(matters: string[], index) {
    for (let matter of matters) {
      this.reportCardList[index].loadMatter(matter, 0);
    }

  }

}
