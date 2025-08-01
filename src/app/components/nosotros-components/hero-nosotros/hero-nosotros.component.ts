import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-nosotros.component.html',
  styleUrl: './hero-nosotros.component.css'
})
export class HeroNosotrosComponent implements OnInit, AfterViewInit {
  @ViewChild('heroRef', { static: false }) heroRef!: ElementRef;

  isVisible = false;
  titleVisible = false;
  subtitleVisible = false;
  statsVisible = false;

  stats = [
    { number: '8+', label: 'Años de experiencia' },
    { number: '500+', label: 'Miembros activos' },
    { number: '15+', label: 'Entrenadores certificados' },
    { number: '24/7', label: 'Acceso disponible' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.startAnimations();
    }, 500);
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
      { threshold: 0.3 }
    );

    if (this.heroRef) {
      observer.observe(this.heroRef.nativeElement);
    }
  }

  startAnimations() {
    this.isVisible = true;
    setTimeout(() => this.titleVisible = true, 200);
    setTimeout(() => this.subtitleVisible = true, 400);
    setTimeout(() => this.statsVisible = true, 600);
  }
}
