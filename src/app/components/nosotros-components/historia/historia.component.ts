import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineEvent } from '../../../interfaces/nosotros';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent implements OnInit, AfterViewInit {
  @ViewChild('sectionRef', { static: false }) sectionRef!: ElementRef;

  isVisible = false;
  titleVisible = false;
  timelineVisible = false;

  timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: '2016',
      title: 'Los Inicios',
      description: 'Comenzamos como un pequeño gimnasio local con la visión de crear una comunidad fitness en Quito.',
      milestone: true
    },
    {
      id: 2,
      year: '2017',
      title: 'Primeros Entrenadores',
      description: 'Incorporamos nuestro primer equipo de entrenadores certificados especializados en diferentes disciplinas.',
      milestone: false
    },
    {
      id: 3,
      year: '2018',
      title: 'Expansión de Equipos',
      description: 'Renovamos completamente nuestras instalaciones con equipamiento de última generación.',
      milestone: false
    },
    {
      id: 4,
      year: '2019',
      title: 'Programas Especializados',
      description: 'Lanzamos nuestros primeros programas especializados de entrenamiento funcional y cross-training.',
      milestone: true
    },
    {
      id: 5,
      year: '2020',
      title: 'Adaptación Digital',
      description: 'Durante la pandemia, implementamos clases virtuales y entrenamientos personalizados online.',
      milestone: false
    },
    {
      id: 6,
      year: '2021',
      title: 'Reconocimientos',
      description: 'Fuimos reconocidos como uno de los mejores gimnasios de Quito por la calidad de nuestros servicios.',
      milestone: true
    },
    {
      id: 7,
      year: '2022',
      title: 'Nueva Sede',
      description: 'Abrimos nuestra segunda ubicación para servir mejor a nuestra creciente comunidad.',
      milestone: false
    },
    {
      id: 8,
      year: '2024',
      title: 'Innovación Continua',
      description: 'Hoy seguimos innovando con tecnología fitness avanzada y programas personalizados.',
      milestone: true
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.startAnimations();
    }, 200);
  }

  ngAfterViewInit() {
    this.observeSection();
  }

  observeSection() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startAnimations();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (this.sectionRef) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }

  startAnimations() {
    this.isVisible = true;
    setTimeout(() => this.titleVisible = true, 300);
    setTimeout(() => this.timelineVisible = true, 600);
  }
}
