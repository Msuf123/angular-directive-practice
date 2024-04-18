import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/attribute-directive/highlight.directive';
import { HoverDirective } from './directives/hover-directive/hover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HighlightDirective,HoverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shouldHighlight:boolean=true
  
  styledOfp={
    fontSize:'18px',backgroundColor:'olive'
  }
  classesObject={
    highlighted:true,
    bigFont:true
  }
  title = 'directive-practice';
}
