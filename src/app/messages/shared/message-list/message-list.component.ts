import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'ct-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})

export class MessageListComponent {
  constructor(private route: ActivatedRoute,
              private router: Router) {}
}
