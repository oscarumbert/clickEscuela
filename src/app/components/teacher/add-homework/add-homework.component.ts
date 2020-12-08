import { MatDatepicker } from '@angular/material/datepicker';
import { Homework } from '../../../models/Homework';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeworkService } from 'src/app/services/homework.service';



@Component({
  selector: 'app-add-Homework',
  templateUrl: './add-Homework.component.html',
  styleUrls: ['./add-Homework.component.css']
})
export class AddHomeworkComponent implements OnInit
 {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<any>;

  currentHomework: Homework;
  existData:boolean;
  localData:any;
  constructor(public dialogRef: MatDialogRef<AddHomeworkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private homeworkService: HomeworkService) 
  { 
    this.existData=false;
    if (data.homework===undefined)
    {
    this.currentHomework=
    {
    code:"",
    name:"",
    description:"",
    deliveryDate: null,
    course:"",
    matter: ""
    }
    this.localData=
    {
      homework:
      {
      code:"",
    name:"",
    description:"",
    deliveryDate: null,
    course:"",
    matter: ""
      },
      index:0
  
    }
    this.existData=!!data.code
    }

    else
    {
      this.currentHomework=this.data.homework
      this.localData=this.data;

    }
    this.existData=!!data.code



   console.log(data)
  }

  

  addHomework()
  {
    console.log(this.currentHomework)
    this.homeworkService.addHomework(this.currentHomework)
    console.log(this.homeworkService.homeworkList)
    this.dialogRef.close()
  }

  

  ngOnInit() 
  {
    console.log(this.data)

  }

}
