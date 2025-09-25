import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: false,
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class Detalhes {

constructor(private route: ActivatedRoute) {}

idUsuario: any = ''

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.idUsuario = params.get('id');
  });
}

}
