import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Blog } from '../../models/portfolio.models';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css'
})
export class BlogList implements OnInit {
  blogs: Blog[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.blogs = this.portfolioService.getBlogs();
  }
}
