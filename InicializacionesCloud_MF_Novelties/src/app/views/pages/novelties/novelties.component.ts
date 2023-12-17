import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {UserService} from "src/app/service/user.service";

@Component({
  selector: 'novelties-web-novedad',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.scss']
})
export class NoveltiesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: Router,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {

  }

  goSteps() {
    this.route.navigateByUrl('/novelties/register');
  }

  goImagenes() {
    this.route.navigateByUrl('/novelties/upload-image');
  }

  getFormNoveltySearch() {
    this.userService.isEnabledToSearch().subscribe((response: any) => {
      console.log(response)
      if (response.isEnableToSearch) {
        this.route.navigateByUrl('/novelties/search')
      } else {
        // TODO: Change the next line to correct functions that shows message
        alert("El usuario tiene novedades pendientes de subir imágenes")
      }
    });
  }
}
