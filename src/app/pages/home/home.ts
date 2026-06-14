import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { FeaturedWork } from '../../components/featured-work/featured-work';
import { Experience } from '../../components/experience/experience';
import { Skills } from '../../components/skills/skills';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Hero, FeaturedWork, Experience, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  ngOnInit(): void {}
}
