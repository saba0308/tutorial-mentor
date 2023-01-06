import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-create-library',
  templateUrl: './create-library.component.html',
  styleUrls: ['./create-library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateLibraryComponent implements OnInit {
  files: any[] = [];
  categoryForm!: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group(
      {
       category: ['', [Validators.required]],
       duration:['',[Validators.required]],
       categoryTitle:['',[Validators.required]],
       youtubeLink:['',[Validators.required]],
       description:['',[Validators.required]],

        file: [
          '',
          [
            Validators.required,
           
          ]
        ]
      }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }
  createCategory() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.router.navigate(['/admin/catalogue/view-library'])

  }
  backToLibrary(){
    this.router.navigate(['/admin/catalogue/library/list-view'])
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
