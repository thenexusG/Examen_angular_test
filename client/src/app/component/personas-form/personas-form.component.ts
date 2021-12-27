import { Component, HostBinding, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/personas';
import { ActivatedRoute, Router } from "@angular/router";

import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personas: Personas = {
    Id: 0,
    Nombre: '',
    ApellidoP: '',
    ApellidoM: '',
    Direccion: '',
    Telefono: ''
  };

  edit: boolean = false;

  constructor(private personasService: PersonasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.personasService.getPersona(params['id']).subscribe(
        (res:any) => {
          console.log(res);
          this.personas = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  savePersona(){
    delete this.personas.Id;
    this.personasService.savePersona(this.personas).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/personas']);
      },
      err => console.log(err)
      
    );
  }

  updatePersona(){
    this.personasService.updatePersona(this.personas.Id!, this.personas).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/personas']);
      },
      err => console.log(err) 
    )
  }

}
