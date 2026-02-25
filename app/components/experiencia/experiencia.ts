import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GaleriaService } from '../../service/galeriaService';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  constructor(public galeria: GaleriaService) {}
}