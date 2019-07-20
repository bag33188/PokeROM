import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {
  codingLanguagesUsed: { name: string; fullName: string; fileExt: string }[];
  isCollapsed: boolean = true;

  constructor() {}

  ngOnInit() {
    this.codingLanguagesUsed = [
      {
        name: 'HTML',
        fullName: 'Hyper Text Markup Language',
        fileExt: '.html'
      },
      {
        name: 'CSS',
        fullName: 'Cascading Style Sheets',
        fileExt: '.css'
      },
      {
        name: 'JavaScript',
        fullName: 'JavaScript',
        fileExt: '.js'
      },
      {
        name: 'SCSS',
        fullName: 'Sassy CSS',
        fileExt: '.scss'
      },
      {
        name: 'TypeScript',
        fullName: 'TypeScript',
        fileExt: '.ts'
      },
      {
        name: 'JSON',
        fullName: 'JavaScript Object Notation',
        fileExt: '.json'
      },
      {
        name: 'YAML',
        fullName: 'Yet Another Markup Language',
        fileExt: '.yml'
      },
      {
        name: 'Shell/Bash',
        fullName: 'Shell Script/Bash Script',
        fileExt: '.sh'
      },
      {
        name: 'Batch',
        fullName: 'Batchfile',
        fileExt: '.bat'
      },
      {
        name: 'SVG',
        fullName: 'Scalable Vector Graphics',
        fileExt: '.svg'
      },
      {
        name: 'Markdown',
        fullName: 'Markdown',
        fileExt: '.md'
      }
    ];
  }
}
