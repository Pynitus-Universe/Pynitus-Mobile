import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'pynitus',
  templateUrl: './app/pynitus.component.html',
})

export class PynitusComponent implements OnInit {
  constructor(private router: Router, private title: Title, private route: ActivatedRoute) {}

  isPlayerCollapsed: boolean = true;
  isNavigationCollapsed: boolean = true;

  titles: any = {
    '/artists': 'Artists',
    '/albums': 'Albums',
    '/tracks': 'Tracks',
    '/upload': 'Upload'
  };
  heading: String = '';

  togglePlayerCollapse(): void {
    this.isPlayerCollapsed = !this.isPlayerCollapsed;
  }

  toggleNavigationCollapse(): void {
    this.isNavigationCollapsed = !this.isNavigationCollapsed;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if(this.router.url in this.titles) {
            var title = this.titles[this.router.url];

            if(title !== undefined) {
              this.title.setTitle(title);
              this.heading = title;
            }
          }
        }
    });
  }
}
