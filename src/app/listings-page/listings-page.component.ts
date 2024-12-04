import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})

export class ListingsPageComponent {
  listing: Listing[] = [];

  constructor() { }

  ngOnInit() {
    this.listing = fakeListings;
  }
}
