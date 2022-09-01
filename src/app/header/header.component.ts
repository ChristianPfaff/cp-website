import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showContent = true;

  screenHeight!: number;
  screenWidth!: number;

  constructor() {
    this.getScreenSize();
   }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;          
    }
}
