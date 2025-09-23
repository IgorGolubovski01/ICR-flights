import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public webService: WebService

  constructor(){
    this.webService = WebService.getInstance()
  }
}
