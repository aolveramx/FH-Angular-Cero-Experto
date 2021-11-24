import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get history() {
    return [ ...this.gifsService.history ]
  }

  search( item: string ) {
    this.gifsService.gifsSearch( item );
  }

  constructor( private gifsService: GifsService ) {}

}
