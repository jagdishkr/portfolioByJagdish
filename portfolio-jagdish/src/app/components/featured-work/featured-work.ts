import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../models/portfolio.models';

@Component({
  selector: 'app-featured-work',
  imports: [CommonModule],
  templateUrl: './featured-work.html',
  styleUrl: './featured-work.css',
})
export class FeaturedWork implements OnInit {
  portfolio: Portfolio | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio = this.portfolioService.getPortfolioData();
  }
}
