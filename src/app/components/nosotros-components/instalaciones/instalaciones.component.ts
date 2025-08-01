import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Facility {
  id: number;
  name: string;
  description: string;
  features: string[];
  area: string;
  capacity: number;
  equipment?: string[];
  imageUrl?: string;
}

interface FacilityStats {
  totalArea: number;
  totalEquipment: number;
  totalCapacity: number;
  facilities: number;
}

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent implements OnInit {
  @ViewChild('instalacionesSection', { static: false }) instalacionesSection!: ElementRef;

  isVisible = false;
  titleVisible = false;
  facilitiesVisible = false;
  statsVisible = false;

  facilities: Facility[] = [
    {
      id: 1,
      name: 'Área de Cardio',
      description: 'Espacio amplio y ventilado con equipos de última generación para entrenamiento cardiovascular.',
      area: '200 m²',
      capacity: 30,
      features: [
        'Caminadoras con pantalla HD',
        'Bicicletas estáticas',
        'Elípticas profesionales',
        'Escaladoras',
        'Sistema de ventilación avanzado',
        'Música ambiental'
      ],
      equipment: [
        '15 Caminadoras Life Fitness',
        '10 Bicicletas Technogym',
        '8 Elípticas Precor',
        '5 Escaladoras StairMaster'
      ]
    },
    {
      id: 2,
      name: 'Zona de Pesas',
      description: 'Área completa con pesas libres y máquinas de musculación para todos los niveles.',
      area: '300 m²',
      capacity: 40,
      features: [
        'Pesas libres completas',
        'Máquinas de musculación',
        'Racks de sentadillas',
        'Bancos ajustables',
        'Barras olímpicas',
        'Espejos de cuerpo completo'
      ],
      equipment: [
        'Set completo de mancuernas',
        '4 Racks de sentadillas',
        '6 Bancos ajustables',
        '20 Máquinas de musculación',
        'Barras olímpicas y discos'
      ]
    },
    {
      id: 3,
      name: 'Salón de Clases',
      description: 'Espacios diseñados para clases grupales con sistemas de audio y video profesional.',
      area: '150 m²',
      capacity: 25,
      features: [
        'Piso de caucho especializado',
        'Sistema de audio HD',
        'Pantallas LED',
        'Aire acondicionado',
        'Espejos frontales',
        'Equipos para clases grupales'
      ],
      equipment: [
        'Steps aeróbicos',
        'Colchonetas de yoga',
        'Bandas elásticas',
        'Pelotas de ejercicio',
        'Mancuernas ligeras'
      ]
    },
    {
      id: 4,
      name: 'Área Funcional',
      description: 'Espacio versátil para entrenamiento funcional y crossfit con equipamiento especializado.',
      area: '180 m²',
      capacity: 20,
      features: [
        'Piso de caucho amortiguador',
        'Anillas de gimnasia',
        'Cuerdas de batalla',
        'Cajones pliométricos',
        'Barras de dominadas',
        'Espacio abierto'
      ],
      equipment: [
        'Kettlebells variados',
        'Medicine balls',
        'Cuerdas de batalla',
        'Cajones pliométricos',
        'TRX suspension trainers'
      ]
    },
    {
      id: 5,
      name: 'Zona de Estiramiento',
      description: 'Área tranquila dedicada al estiramiento, yoga y relajación post-entrenamiento.',
      area: '100 m²',
      capacity: 15,
      features: [
        'Ambiente relajante',
        'Iluminación tenue',
        'Música suave',
        'Colchonetas premium',
        'Bloques de yoga',
        'Temperatura controlada'
      ],
      equipment: [
        'Colchonetas de yoga',
        'Bloques y correas',
        'Rodillos de espuma',
        'Pelotas de masaje',
        'Bandas de estiramiento'
      ]
    },
    {
      id: 6,
      name: 'Vestidores Premium',
      description: 'Instalaciones completas con casilleros, duchas y áreas de cambio cómodas y seguras.',
      area: '120 m²',
      capacity: 50,
      features: [
        'Casilleros individuales',
        'Duchas con agua caliente',
        'Secadores de cabello',
        'Productos de higiene',
        'Bancas cómodas',
        'Seguridad 24/7'
      ],
      equipment: [
        '50 Casilleros seguros',
        '10 Duchas individuales',
        'Secadores profesionales',
        'Dispensadores de productos',
        'Sistema de ventilación'
      ]
    }
  ];

  stats: FacilityStats = {
    totalArea: 1050,
    totalEquipment: 150,
    totalCapacity: 180,
    facilities: 6
  };

  ngOnInit() {
    setTimeout(() => {
      this.observeSection();
    }, 100);
  }

  private observeSection() {
    if (this.instalacionesSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startAnimations();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(this.instalacionesSection.nativeElement);
    }
  }

  startAnimations() {
    this.isVisible = true;
    setTimeout(() => this.titleVisible = true, 300);
    setTimeout(() => this.statsVisible = true, 600);
    setTimeout(() => this.facilitiesVisible = true, 900);
  }
}
