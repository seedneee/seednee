import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } 
from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('inputElement')
  inputElement!: ElementRef; 
  constructor() { }

  ngOnInit(): void {
   

   
    
  

}
change(){

 // (document.querySelector('.app-alerts') as HTMLElement).style.backgroundColor = 'red';
}


}
