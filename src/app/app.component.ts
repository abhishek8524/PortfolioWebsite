import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './modules/material-ui.module';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, CommonModule, HeaderComponent, FooterComponent, ContactComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AbhishekAssignment1App';
}
