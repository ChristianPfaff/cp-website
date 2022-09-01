import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
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



