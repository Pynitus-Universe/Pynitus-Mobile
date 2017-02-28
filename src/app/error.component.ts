import { Component, OnInit, ErrorHandler, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { Observable }         from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export function fatalError(router: Router, error: any): void {
  let navigationExtras: NavigationExtras = {
    queryParams: { 'msg': error }
  };

  router.navigate(['/error'], navigationExtras);
}

export function logApiError(error: any): Promise<any> {
  console.error('An error occurred: %o', error);

  return Promise.reject(error.message || error);
}

@Component({
  templateUrl: './app/error.component.html',
})

export class ErrorComponent implements OnInit {
  message: string = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route
      .queryParams
      .map(params => params['msg'] || undefined)
      .subscribe(val => this.message = val);
  }
}
