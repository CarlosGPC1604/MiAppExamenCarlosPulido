import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  correo: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    const datos = {
      correo: this.correo,
      password: this.password
    };

    this.loginService.enviarDatos(datos).subscribe(response => {
      if (response.success) {
        this.loginService.obtenerProductos().subscribe(productos => {
          this.router.navigate(['/home'], { state: { productos: productos } });
        }, error => {
          console.error('Error al obtener productos:', error);
        });
      } else {
        console.error('Error de login:', response.message);
      }
    }, error => {
      console.error('Error en la petición:', error);
    });
  }
}