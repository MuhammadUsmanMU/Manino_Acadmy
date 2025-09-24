import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs = [
    {image:'../../../assets/blogs/1.webp' , heading: 'AI-Driven Market Trend Analysis: Spotting Disruptive Opportunities Before They Happen' , para:'written by “Jake Mannino” Why Leaders Need AI Now In the fast-paced […]'},
    {image:'../../../assets/blogs/2.webp' , heading: 'The Rise of Autonomous Selling Agents: The Future of Sales, Reimagined' , para:'written by “Jake Mannino” Diversity, equity, and inclusion (DEI) have evolved from […]'},
    {image:'../../../assets/blogs/3.webp' , heading: 'AI-Powered Emotional Intelligence: The New Frontier of Leadership' , para:'written by “Jake Mannino” The 3 AM Wake-Up Call Sarah Zhang, CEO […]'},
    {image:'../../../assets/blogs/4.webp' , heading: 'AI and Blockchain: Transforming Trust in Modern Sales' , para:'written by “Jake Mannino” The Trust Crisis in Sales David Chen, CEO […]'},
    {image:'../../../assets/blogs/1.webp' , heading: '11 Reasons Why Leaders Must Master Artificial Intelligence (AI)' , para:'written by “Jake Mannino” Why Leaders Need AI Now In the fast-paced […]'},
    {image:'../../../assets/blogs/3.webp' , heading: 'The Critical Importance of Diversity, Equity, and Inclusion (DEI) in the Workplace' , para:'written by “Jake Mannino” Diversity, equity, and inclusion (DEI) have evolved from […]'},
 ]
}
