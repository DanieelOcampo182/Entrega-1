import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
  }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
    icon: 'grid-outline',
    name: 'Action Sheet',
    redirecTo: '/action-sheet'
    },
    {
      icon: 'heart-half-outline',
      name: 'Alert',
      redirecTo: '/alert'
      }
    ];
    

  constructor() { }

  ngOnInit() {
  }

}
