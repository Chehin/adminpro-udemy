import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Importaciones para sweetAlert
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  sonIguales(campo1: string, campo2: string){


    return(group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo1].value;

      if(pass1 === pass2){  // Entra si todo esta correcto
        return null;
      }

      return {  // Para condiciones de error, formulario no valido
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();  // Para la pelotita que gira

    this.forma = new FormGroup({  // Formulario con los atributos a manejar desde el html
      nombre: new FormControl(null, Validators.required),  // No importa el orden
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)

    }, {validators: this.sonIguales('password', 'password2') } );

    this.forma.setValue({
      nombre: 'Test',
      correo: 'Test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: 'true'
    });

  }



  registrarUsuario(){
    if (this.forma.invalid){
      return;
    }
    const swal: SweetAlert = _swal as any;
    if(!this.forma.value.condiciones){
      swal('Importante','Debe de aceptar las condiciones', 'warning');
      return;
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
      );

      this._usuarioService.crearUsuario(usuario)
        .subscribe(resp => this.router.navigate(['/login']));
  }

}
