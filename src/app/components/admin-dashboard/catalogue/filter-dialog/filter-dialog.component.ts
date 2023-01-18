import { Component, OnInit,TemplateRef,Input } from '@angular/core';
import { TmDateService} from '@tmlib/ui-sdk/calendar-kit';
import{TmCalendarRange } from '@tmlib/ui-sdk/calendar';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,FormControl
} from '@angular/forms';

import { TmDialogRef } from '@tmlib/ui-sdk/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  minFromDate!: Date;
  maxFromDate!: Date;
  minToDate!: Date;
  maxToDate!: Date;
  min!:Date;
  max!:Date;
  date = new Date();
  buttonValue:string='';


  files: any[] = [];
  categoryForm!: FormGroup;
  submitted = false;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group(
      {
       category: ['', [Validators.required]],
        file: [
          '',
          [
            Validators.required,
           
          ]
        ]
      }
    )
  }
 

  constructor(private dataService: DataService,protected dateService: TmDateService<Date>,protected ref: TmDialogRef<FilterDialogComponent>,private formBuilder: FormBuilder) {

    this. minFromDate!= this.dateService.addMonth(this.dateService.today(), -1);
    this. maxFromDate! = this.dateService.addMonth(this.dateService.today(),0);
    this. maxToDate! = this.dateService.addMonth(this.dateService.today(),0);
    this.date = dateService.today();
    this.date.setDate(1);
    this.min = dateService.addDay(this.date,-23);
    this.max = dateService.addDay(this.date, 23);
    

  }
  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }
  filterLibrary() {
    this.dataService.setBooleanToTrue(true);
    this.ref.close();

  }
  dismiss() {
    this.ref.close();
  }
  /**
   * on file drop handler
   */
  onFileDropped($event:any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files:any) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes:any, decimals:any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
 
}
