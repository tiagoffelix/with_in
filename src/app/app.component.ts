import { Component } from '@angular/core';
import { Router, NavigationEnd, UrlTree } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHome = true;
  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      const url: string = e.urlAfterRedirects ?? e.url ?? '';
      // Parse URL to determine if the primary route is root ('') regardless of fragment/query
      const tree: UrlTree = this.router.parseUrl(url);
      const primary = tree.root.children['primary'];
      const isRoot = !primary || primary.segments.length === 0;
      this.isHome = isRoot;
    });
  }
}
