import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent {

  constructor() { }

  itemsProfesional = [
    {
      color: "41516C",
      nombre: 'Desarrollador Web y de Apps',
      ano: "2022 - Act.",
      descripcion: 'Desarrollo de aplicaciones web con HTML, CSS, JavaScript, Angular, Laravel, MySQL y Bootstrap a través de GitHub.'
    },
    {
      color: "FBCA3E",
      nombre: 'Profesor',
      ano: "2021 - 2023",
      descripcion: 'Impartición de clases particulares de programación desde cero, estudios universitarios de Ingeniería Informática y ESO.'
    },
    {
      color: "FFA500",
      nombre: 'Grado en Ingeniería Informática',
      ano: "2020 - 2024",
      descripcion: 'Estudios en la Universidad Europea de Madrid.'
    },
    {
      color: "E24A68",
      nombre: 'Título de Bachillerato y ESO',
      ano: "2016 - 2019",
      descripcion: 'Educación secundaria en el IES Diego Velázquez.'
    },
    {
      color: "1B5F8C",
      nombre: 'Cambridge English: Advanced C1',
      ano: "2017",
      descripcion: 'Certificación de nivel de inglés avanzado con 185/230 puntos.'
    },
    {
      color: "4CADAD",
      nombre: 'Francés DELF: Nivel B2',
      ano: "2017",
      descripcion: 'Certificación de nivel de francés avanzado 77,5/100 puntos.'
    },
    {
      color: "61C0A8",
      nombre: 'Escuela Europea de Bruselas III',
      ano: "2012 - 2016",
      descripcion: 'Educación primaria extranjera.'
    }
  ];

}
