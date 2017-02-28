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

  isNavbarVisible: boolean = true;

  pathTitles: any = {
    '/artists': 'Artists',
    '/albums': 'Albums',
    '/tracks': 'Tracks',
    '/upload': 'Upload',
    '/error': 'Error'
  };
  pathNavbarVisible: any = {
    '/artists': true,
    '/albums': true,
    '/tracks': true,
    '/upload': true,
    '/error': false
  };
  heading: String = '';

  togglePlayerCollapse(): void {
    this.isPlayerCollapsed = !this.isPlayerCollapsed;
  }

  toggleNavigationCollapse(): void {
    this.isNavigationCollapsed = !this.isNavigationCollapsed;
  }

  startsWithPath(arr: {}, key: string): any {
    for(let path in arr)
      if(key.startsWith(path))
        return arr[path];
    return null;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          var title = this.startsWithPath(this.pathTitles, this.router.url);
          var isVisible = this.startsWithPath(this.pathNavbarVisible, this.router.url);

          if(title === null)
            title = 'Unknown';

          this.title.setTitle(title);
          this.heading = title;

          if(isVisible === null)
            isVisible = true;

          this.isNavbarVisible = isVisible;
        }
    });
  }
}
