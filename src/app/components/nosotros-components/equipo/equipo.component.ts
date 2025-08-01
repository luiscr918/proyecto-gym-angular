import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../../interfaces/nosotros';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent implements OnInit, AfterViewInit {
  @ViewChild('sectionRef', { static: false }) sectionRef!: ElementRef;

  isVisible = false;
  titleVisible = false;
  teamVisible = false;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      position: 'Director General & Entrenador Principal',
      description: 'Con más de 10 años de experiencia en fitness y gestión deportiva, Carlos lidera nuestro equipo con pasión y dedicación.',
      image: '/assets/team/carlos.jpg',
      certifications: ['ACSM-CPT', 'NASM-PES', 'CrossFit Level 2'],
      experience: '10+ años',
      specialties: ['Entrenamiento Funcional', 'Fuerza', 'Liderazgo de Equipos']
    },
    {
      id: 2,
      name: 'María González',
      position: 'Especialista en Yoga & Pilates',
      description: 'Instructora certificada con enfoque en bienestar integral, María ayuda a nuestros miembros a encontrar equilibrio y flexibilidad.',
      image: '/assets/team/maria.jpg',
      certifications: ['RYT-500', 'Pilates Method Alliance', 'Mindfulness Coach'],
      experience: '7+ años',
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Pilates Reformer', 'Meditación']
    },
    {
      id: 3,
      name: 'Roberto Silva',
      position: 'Entrenador de Fuerza',
      description: 'Especialista en powerlifting y entrenamiento de fuerza, Roberto ayuda a maximizar el potencial de cada atleta.',
      image: '/assets/team/roberto.jpg',
      certifications: ['NSCA-CSCS', 'USA Powerlifting', 'Precision Nutrition L1'],
      experience: '8+ años',
      specialties: ['Powerlifting', 'Hipertrofia', 'Nutrición Deportiva']
    },
    {
      id: 4,
      name: 'Ana López',
      position: 'Instructora de Cardio & HIIT',
      description: 'Energética y motivadora, Ana diseña entrenamientos cardiovasculares que desafían y transforman.',
      image: '/assets/team/ana.jpg',
      certifications: ['ACE-CPT', 'TRX-STC', 'Spinning Instructor'],
      experience: '5+ años',
      specialties: ['HIIT', 'Cardio Dance', 'TRX', 'Spinning']
    },
    {
      id: 5,
      name: 'Diego Morales',
      position: 'Fisioterapeuta Deportivo',
      description: 'Encargado de la recuperación y prevención de lesiones, Diego asegura que entrenes de forma segura.',
      image: '/assets/team/diego.jpg',
      certifications: ['Licenciatura en Fisioterapia', 'Especialización Deportiva', 'FMS Level 2'],
      experience: '6+ años',
      specialties: ['Rehabilitación', 'Prevención de Lesiones', 'Movilidad', 'FMS']
    },
    {
      id: 6,
      name: 'Sofía Ramírez',
      position: 'Nutricionista Deportiva',
      description: 'Especialista en nutrición y suplementación, Sofía diseña planes alimentarios personalizados.',
      image: '/assets/team/sofia.jpg',
      certifications: ['Licenciatura en Nutrición', 'Especialización Deportiva', 'ISSN-SNS'],
      experience: '4+ años',
      specialties: ['Nutrición Deportiva', 'Planes Alimentarios', 'Suplementación']
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
    setTimeout(() => this.teamVisible = true, 600);
  }
}
