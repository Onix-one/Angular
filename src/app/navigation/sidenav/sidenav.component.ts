import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavItem } from './navitem.model'
import { SidenavService } from './sidenav.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('indicatorRotate', [
      state('itemIsCollapsed', style({ transform: 'rotate(0deg)' })),
      state('itemIsExpanded', style({ transform: 'rotate(180deg)' })),
      transition('itemIsExpanded <=> itemIsCollapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidenavComponent implements AfterViewInit, OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  itemIsExpanded: boolean = false;
  itemChildren: NavItem[];
  isExpanded: boolean = true;
  
  constructor(private sidenavService: SidenavService,
    public router: Router) { }

  resize(): void {
    window.dispatchEvent(new Event('resize'));
  }

  ngAfterViewInit() {
    this.sidenavService.appDrawer = this.appDrawer;
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.resize();
    }
    if (item.children && item.children.length) {
      this.itemIsExpanded = !this.itemIsExpanded;
      this.itemChildren = item.children;
    }
  }

  ngOnInit() {
  }

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: ''
    },
    {
      displayName: 'Students',
      iconName: 'person_outline',
      route: 'students'
    },
    {
      displayName: 'Groups',
      iconName: 'group',
      route: 'groups'
    },
    {
      displayName: 'Pipelines',
      iconName: 'compare_arrows',
      route: 'pipelines'
    },
    {
      displayName: 'Templates',
      iconName: 'content_copy',
      route: 'templates'
    },
    {
      displayName: 'Lessons',
      iconName: 'school',
      children: [
        {
          displayName: 'Lesson 3',
          iconName: 'extension',
          route: 'lessons/lesson003'
        },
        {
          displayName: 'Lesson 4',
          iconName: 'extension',
          route: 'lessons/lesson004'
        },
        {
          displayName: 'Lesson 5',
          iconName: 'extension',
          route: 'lessons/lesson005'
        },
        {
          displayName: 'Lesson 6',
          iconName: 'extension',
          route: 'lessons/lesson006'
        },
        {
          displayName: 'Lesson 7',
          iconName: 'extension',
          route: 'lessons/lesson007'
        },
        {
          displayName: 'Lesson 8',
          iconName: 'extension',
          route: 'lessons/lesson008'
        },
        {
          displayName: 'Lesson 9',
          iconName: 'extension',
          route: 'lessons/lesson009'
        },
        {
          displayName: 'Lesson 10',
          iconName: 'extension',
          route: 'lessons/lesson010'
        }
      ]
    }
  ]
}
