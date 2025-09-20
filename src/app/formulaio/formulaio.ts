import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaio',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulaio.html',
  styleUrl: './formulaio.css'
})
export class Formulaio {

  //Validaciones
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5)]),
    departamento: new FormControl('', [Validators.required]),
    jornada: new FormControl('', [Validators.required]),
    sueldo: new FormControl('', [Validators.required, Validators.min(0)])
  });

  // Listas para los select
  departamentos: string[] = [
    'Administración',
    'Recursos Humanos',
    'Finanzas',
    'Ventas',
    'Marketing',
    'Producción',
    'Logística',
    'Sistemas / TI',
    'Investigación y Desarrollo',
    'Atención al Cliente'
  ];
  jornadas: string[] = [
    'Jornada Tiempo Completo',
    'Medio Tiempo',
    'Jornada Parcial (por horas)',
    'Turno Mañana',
    'Turno Tarde',
    'Turno Noche',
    'Jornada Flexible / Remota'
  ];

  enviar(){
    console.log(`
      Tu nombre es: ${this.form.get('nombre')?.value}
      Tu apellido es: ${this.form.get('apellido')?.value}
      Tu correo es: ${this.form.get('correo')?.value}
      Tu fecha de nacimiento es: ${this.form.get('fechaNacimiento')?.value}
      Tu genero es: ${this.form.get('sexo')?.value}
      Tu direccion es: ${this.form.get('direccion')?.value}
      Tu departamento es: ${this.form.get('departamento')?.value}
      Tu jornada es: ${this.form.get('jornada')?.value}
      Tu sueldo es: ${this.form.get('sueldo')?.value}
      `)
    console.log(this.form.value);

  }
  limpiar(){
    this.form.reset();
  }
}
