import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent {

  form: FormGroup;
  constructor(
    public formData: FormBuilder,
    public dialogRef: MatDialogRef<MapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
       this.form = formData.group({
          'title': data.title,
          'desc': data.desc
       });
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

    saveClick(): void {
      this.dialogRef.close(this.form.value);
    }



}
