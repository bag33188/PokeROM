import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  group,
  animateChild,
  stagger,
  AnimationTriggerMetadata
} from '@angular/animations';

export const flyInAnimation: AnimationTriggerMetadata[] = [
  trigger('flyIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate('700ms ease-in')
    ])
  ])
];

export const flyOutAnimation: AnimationTriggerMetadata[] = [
  trigger('flyOut', [
    state('out', style({ transform: 'translateX(-100%)' })),
    transition('void => *', [
      style({ transform: 'translateX(0)' }),
      animate('700ms ease-out')
    ])
  ])
];

export const flyInOutAnimation: AnimationTriggerMetadata[] = [
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
  ])
];

export const flyFromBottomAnimation: AnimationTriggerMetadata[] = [
  trigger('flyFromBottom', [
    state('in', style({ transform: 'translateY(0)' })),
    transition('void => *', [
      style({ transform: 'translateY(100%)' }),
      animate('700ms ease-in')
    ])
  ])
];

export const flyItemsAnimation: AnimationTriggerMetadata[] = [
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

export const toggleSlideAnimation: AnimationTriggerMetadata[] = [
  trigger('slide', [
    state('left', style({ transform: 'translateX(0)' })),
    state('right', style({ transform: 'translateX(-50%)' })),
    transition('* => *', animate(300))
  ])
];

export const slideInAnimation: AnimationTriggerMetadata[] = [
  trigger('routeAnimation', [
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
  ])
];

export const fadeOutAnimation: AnimationTriggerMetadata[] = [
  trigger('fadeOut', [
    state('in', style({ opacity: 1 })),
    transition(':leave', animate(555, style({ opacity: 0 })))
  ])
];

export const fadeInAnimation: AnimationTriggerMetadata[] = [
  trigger('fadeInt', [
    state('out', style({ opacity: 0 })),
    transition(':leave', animate(555, style({ opacity: 1 })))
  ])
];

export const rotateInAnimation: AnimationTriggerMetadata[] = [
  trigger('rotateIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'rotate(-180deg)' }),
      animate('700ms ease-out')
    ])
  ])
];

export const flipAnimation: AnimationTriggerMetadata[] = [
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

export const filterAnimation: AnimationTriggerMetadata[] = [
  trigger('filterAnimation', [
    transition(':enter, * => 0, * => -1', []),
    transition(':increment', [
      query(
        ':enter',
        [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' }))
          ])
        ],
        { optional: true }
      )
    ]),
    transition(':decrement', [
      query(':leave', [
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 0, width: '0px' }))
        ])
      ])
    ])
  ])
];

export const openCloseAnimation: AnimationTriggerMetadata[] = [
  trigger('openClose', [
    state(
      'open',
      style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })
    ),
    state(
      'close',
      style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })
    ),
    transition('* => active', [
      animate(
        '2s',
        keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.8 }),
          style({ backgroundColor: 'orange', offset: 1.0 })
        ])
      )
    ]),
    transition('* => inactive', [
      animate(
        '2s',
        keyframes([
          style({ backgroundColor: 'orange', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.2 }),
          style({ backgroundColor: 'blue', offset: 1.0 })
        ])
      )
    ]),
    transition('* => *', [
      animate(
        '1s',
        keyframes([
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ])
      )
    ])
  ])
];

export const shrinkOutAnimation: AnimationTriggerMetadata[] = [
  trigger('shrinkOut', [
    state('in', style({ height: '*' })),
    transition('* => void', [
      style({ height: '*' }),
      animate(250, style({ height: 0 }))
    ])
  ])
];
