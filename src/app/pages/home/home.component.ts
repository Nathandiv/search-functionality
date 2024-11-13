// src/app/home.component.ts
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,  // Marks this as a standalone component
  imports: [NgFor, FormsModule, FilterPipe],  // Import necessary modules and pipes directly
 templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchText: string = '';
  heroes = [
    { name: 'Superman' },
    { name: 'Batman' },
    { name: 'Wonder Woman' },
    { name: 'Flash' },
    { name: 'Aquaman' }
  ];
}
