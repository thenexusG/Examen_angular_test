import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/personas';
import { PersonasService } from "../../services/personas.service";

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas: any = {};

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personasService.getPersonas().subscribe(
      res => {
        this.personas = res
      },
      err => console.log(err)
    )
  }

  deletePersona(Id: string) {
    if (confirm('Delete?')) {
      this.personasService.deletePersona(Id).subscribe(
        res => {
          console.log(res);
          this.getPersonas();
        },
        err => console.log(err)
      )
    }
  }

  

}
