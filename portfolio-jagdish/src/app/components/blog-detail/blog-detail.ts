import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../../services/portfolio.service';
import { Blog } from '../../models/portfolio.models';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail implements OnInit {
  blog: Blog | null = null;
  relatedBlogs: Blog[] = [];
  showToc: boolean = true;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const blogId = params['id'];
      this.blog = this.portfolioService.getBlogById(blogId) || null;
      
      if (!this.blog) {
        this.router.navigate(['/blog']);
      } else {
        const allBlogs = this.portfolioService.getBlogs();
        this.relatedBlogs = allBlogs
          .filter(b => b.id !== blogId && b.topic === this.blog?.topic)
          .slice(0, 2);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      const btn = event?.target as HTMLElement;
      const originalText = btn.textContent;
      btn.textContent = '✓ Copied!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
