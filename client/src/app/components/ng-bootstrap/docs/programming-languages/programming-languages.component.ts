import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgrammingLanguage } from '../../../../interfaces/ProgrammingLanguage';

@Component({
  selector: 'app-docs-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit, OnDestroy {
  codingLanguagesUsed: ProgrammingLanguage[];
  isCollapsed: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isCollapsed = true;
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
        name: 'Python',
        fullName: 'Python 3',
        fileExt: '.py'
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

  ngOnDestroy() {
    this.isCollapsed = true;
  }
}
