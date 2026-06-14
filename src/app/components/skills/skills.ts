import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio, Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  portfolio: Portfolio | null = null;
  skillsByCategory: { [key: string]: Skill[] } = {};

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio = this.portfolioService.getPortfolioData();
    this.groupSkillsByCategory();
  }

  groupSkillsByCategory(): void {
    this.skillsByCategory = {};
    if (this.portfolio) {
      this.portfolio.skills.forEach(skill => {
        if (!this.skillsByCategory[skill.category]) {
          this.skillsByCategory[skill.category] = [];
        }
        this.skillsByCategory[skill.category].push(skill);
      });
    }
  }

  getCategories(): string[] {
    return Object.keys(this.skillsByCategory);
  }
}
