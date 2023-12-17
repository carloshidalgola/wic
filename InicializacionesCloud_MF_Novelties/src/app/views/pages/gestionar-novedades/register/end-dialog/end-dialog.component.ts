import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-end-dialog',
  templateUrl: './end-dialog.component.html',
  styleUrls: ['./end-dialog.component.css']
})
export class EndDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EndDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
