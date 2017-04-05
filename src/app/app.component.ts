import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boton de prueba';
  visible = false;

  Mostrar(){
  	this.visible = true;
  }
  Ocultar(){
  	this.visible = false;
  }

}
