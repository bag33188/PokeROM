import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  group,
  animateChild
} from '@angular/animations';

export const flyin = [
  trigger('flyin', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate('700ms ease-in')
    ])
  ])
];

export const rotateIn = [
  trigger('rotateIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'rotate(-180deg)' }),
      animate('700ms ease-out')
    ])
  ])
];

export const flyFromBottom = [
  trigger('flyFromBottom', [
    state('in', style({ transform: 'translateY(0)' })),
    transition('void => *', [
      style({ transform: 'translateY(100%)' }),
      animate('700ms ease-in')
    ])
  ])
];

export const flyItems = [
  trigger('flyItems', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      animate(
        700,
        keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ])
      )
    ]),
    transition('* => void', [
      animate(
        500,
        keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ])
      )
    ])
  ])
];
// Routable animations
export const slideInAnimation = trigger('routeAnimation', [
  transition('heroes <=> hero', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
    ]),
    query(':enter', animateChild())
  ])
]);

export const flipAnimation = [
  trigger('flipState', [
    state(
      'active',
      style({
        transform: 'rotateY(180deg)'
      })
    ),
    state(
      'inactive',
      style({
        transform: 'rotateY(0)'
      })
    ),
    transition('active => inactive', animate('400ms ease-out')),
    transition('inactive => active', animate('400ms ease-in'))
  ])
];
