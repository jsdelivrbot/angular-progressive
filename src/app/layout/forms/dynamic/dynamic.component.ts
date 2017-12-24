import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "dynamic",
  templateUrl: "dynamic.component.html",
  styles: []
})
export class DynamicComponent implements OnInit {
  form: FormGroup;
  @Input() formDataObj;

  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for(const prop of Object.keys(this.formDataObj)){
      formDataObj[prop] = new FormControl(this.formDataObj[prop].value)
      
      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options,
      });
    }

    this.form = new FormGroup(formDataObj);
  }
}
