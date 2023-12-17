import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-terminal-configuration',
  templateUrl: './terminal-configuration.component.html',
  styleUrls: ['./terminal-configuration.component.scss']
})
export class TerminalConfigurationComponent implements OnInit {


  public formTerminalData!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.formTerminalData = this.formBuilder.group({
      novelty: ["0", Validators.required],
      causalNoveltie: ["0", Validators.required],
      loadParam: ["0", Validators.required],
      aditionalText: [""],
      group: ["0", Validators.required],
      date: [""],
      key: ["0"],
      caseNumber: [""],
      dataphoneModel: ["0"],
    });
  }

  ngOnInit(): void {
  }

  public panelOpenState = false;
  public showCollapsComponent = true;

  public openCollapsComponent() {
    this.showCollapsComponent = !this.showCollapsComponent;
  }
}
