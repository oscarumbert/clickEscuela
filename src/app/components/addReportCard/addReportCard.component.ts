import { ReportCard } from './../../models/ReportCard';
import { TrimesterService } from './../../services/trimester.service';
import { ReportCardService } from './../../services/reportCard.service';
import { element } from 'protractor';
import { Component, Inject, OnInit, ElementRef, ViewChild, ViewChildren, Input, QueryList } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addReportCard',
  templateUrl: './addReportCard.component.html',
  styleUrls: ['./addReportCard.component.scss']
})
export class AddReportCardComponent implements OnInit {

  mattersList: string[];
  trimesterList:ReportCard[];
  existData: boolean;
  @ViewChildren('grade') inputs: ElementRef[];
  @ViewChildren('trimesterTab') tabs: QueryList<ElementRef>;

  selectedTrimester=-1;
  showTrimester=false;

  currentData:ReportCard;

  constructor(public dialogRef: MatDialogRef<AddReportCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private reporcardService: ReportCardService,private trimesterService:TrimesterService) 
  { 
    this.existData=this.data.component!==undefined
    this.trimesterList=this.trimesterService.reportCardList 
    this.currentData=data.component;
  }

  changeSelectedTrimester(trimes)
  {
    if (trimes==this.selectedTrimester)
      this.selectedTrimester=-1;
      else
    this.selectedTrimester=trimes;

    this.currentData=this.trimesterService.trimesterList[trimes]
    console.log(this.currentData)
  }



  changeTrimester()
  {
    if (!this.showTrimester)
    {
    this.trimesterList=this.trimesterService.trimesterList.filter(a => a.nameStudent==this.data.component.nameStudent && a.surnameStudent==this.data.component.surname)
    console.log(this.trimesterList.length)

    

    for (let i=0;i<this.trimesterList.length;i++)
    {
      console.log(      this.tabs.filter((element,index)=> index===i))

      this.tabs.filter((element,index)=> index===i)[0].nativeElement.disabled=false;
      
      this.showTrimester=true;

    }
    }
   
  }
  


  closeOnClick()
  {
    this.dialogRef.close()
    this.showTrimester=false;

  }

  ngOnInit() 
  {
    console.log(this.existData)
  }

  addReportCard(index)
  {
    let gradesList=[];
    for (let elem of this.inputs)
    { 
      gradesList.push(elem.nativeElement.value)
    }
    this.reporcardService.addReportCard(gradesList,index)
  }



 
  

}
