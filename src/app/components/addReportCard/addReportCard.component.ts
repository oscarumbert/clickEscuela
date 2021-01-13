import { ReportCardService } from './../../services/reportCard.service';
import { element } from 'protractor';
import { Component, Inject, OnInit, ElementRef, ViewChild, ViewChildren, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addReportCard',
  templateUrl: './addReportCard.component.html',
  styleUrls: ['./addReportCard.component.scss']
})
export class AddReportCardComponent implements OnInit {

  mattersList: string[];
  existData: boolean;
  @ViewChildren('grade') inputs: ElementRef[];

  selectedTrimester=0;

  constructor(public dialogRef: MatDialogRef<AddReportCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private reporcardService: ReportCardService) 
  { 
    
  
    this.existData=this.data.component!==undefined
    
    
  }

  changeSelectedTrimester(trimes)
  {
    if (trimes==this.selectedTrimester)
      this.selectedTrimester=0;
      else
    this.selectedTrimester=trimes;
  }


  closeOnClick()
  {
    this.dialogRef.close()
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
