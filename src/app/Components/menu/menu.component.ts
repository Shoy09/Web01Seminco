import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus = [
    {title: 'Home', icon: 'assets/home.svg' },
    { title: 'Dashboard', icon: 'assets/das.svg', subItems: ['Perforación Horizontal', 'Explosivos','Servicios Auxiliares','Sostenimiento','Mediciones','Aceros de Perforación','Acerreo','Carguio','Perforación de Taladros Largos'] },
    { title: 'Carga de Datos', icon: 'assets/data.svg', subItems: ['estados', 'Perforación Horizontal', 'Explosivos','Servicios Auxiliares','Sostenimiento','Mediciones','Aceros de Perforación','Acerreo','Carguio','Perforación de Taladros Largos'] },
    { title: 'Roles', icon: 'assets/rol.svg', subItems: ['Subopción A', 'Subopción B'] },
  ];

  menuOpenIndex: number | null = null;
  selectedSubItemIndex: number | null = null;
  selectedSubItem: string | null = null;

  constructor(private router: Router) { 
    // Si no hay ninguna ruta activa, redirige a Home
    if (this.router.url === '/' || this.router.url === '/Dashboard') {
      this.router.navigate(['/Dashboard/Home']);
    }
  }
  

  AbrirCerrar(index: number, menu: any) {
    if (menu.title === 'Home') {
      this.router.navigate(['/Dashboard/Home']); // Redirige directamente
    } else {
      this.menuOpenIndex = this.menuOpenIndex === index ? null : index;
    }
  }
  

  selectSubItem(index: number, subItem: string) {
    this.selectedSubItemIndex = index;
    this.selectedSubItem = subItem;

    // 🔹 Navegación automática al hacer clic en la subopción
    const ruta = `/Dashboard/${this.convertirRuta(subItem)}`;
    this.router.navigate([ruta]);
  }

  convertirRuta(subItem: string): string {
    return subItem.toLowerCase().replace(/ /g, '-'); // Convierte espacios a guiones
  }
}
