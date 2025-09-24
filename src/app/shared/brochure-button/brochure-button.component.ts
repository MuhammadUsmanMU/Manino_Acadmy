import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brochure-button',
  templateUrl: './brochure-button.component.html',
  styleUrls: ['./brochure-button.component.scss']
})
export class BrochureButtonComponent {
 @Input() fileName!: string; // e.g., 'Gold package.pdf'
  @Input() label: string = 'Download Brochure';
  @Input() className: string = ''; // Optional styling override

  download(): void {
    const link = document.createElement('a');
    link.href = `assets/Brochures/${this.fileName}`;
    link.download = this.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
