import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]

  // animations: [
  //   trigger('divState', [
  //     state('normal', style({
  //       backgroundColor: 'red',
  //       transform: 'translateX(0)'
  //     })),
  //     state('highlighted', style({
  //       backgroundColor: 'blue',
  //       transform: 'translateX(100px)'
  //     })),
  //     transition('normal => highlighted', animate(300)),
  //     transition('highlighted => normal', animate(600))
  //     // transition('normal <=> highlighted', animate(300)),
  //   ]),
  //   trigger('wildState', [
  //     state('normal', style({
  //       backgroundColor: 'red',
  //       transform: 'translateX(0) scale(1)'
  //     })),
  //     state('highlighted', style({
  //       backgroundColor: 'green',
  //       transform: 'translateX(100px) scale(1)'
  //     })),
  //     state('shrunken', style({
  //       backgroundColor: 'green',
  //       transform: 'translateX(0) scale(0.5)'
  //     })),
  //     transition('normal => highlighted', animate(300)),
  //     transition('highlighted => normal', animate(600)),
  //     // transition('normal <=> highlighted', animate(300)),
  //     transition('shrunken <=> *', [
  //       animate(500, style({
  //         backgroundColor: 'orange'
  //       })),
  //       animate(500, style({
  //         borderRadius: '50px'
  //       })),
  //       animate(500)
  //     ])
  //   ]),
  //   trigger('list1', [
  //     state('in', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     transition('void => *', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(-100px)'
  //       }),
  //       animate(300)
  //     ]),
  //     transition('* => void', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(-100px)'
  //       }),
  //       animate(300, style({
  //         transform: 'translateX(100px)',
  //         opacity: 0
  //       }))
  //     ])
  //   ]),
  //   trigger('list2', [
  //     state('in', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     transition('void => *', [
  //       animate(1000, keyframes([
  //         style({
  //           transform: 'translateX(-100px)',
  //           opacity: 0,
  //           offset: 0
  //         }),
  //         style({
  //           transform: 'translateX(-50px)',
  //           opacity: 0.5,
  //           offset: 0.3
  //         }),
  //         style({
  //           transform: 'translateX(-20px)',
  //           opacity: 1,
  //           offset: 0.8
  //         }),
  //         style({
  //           transform: 'translateX(0px)',
  //           opacity: 1,
  //           offset: 1
  //         })
  //       ]))
  //     ])
  //   ]),
  // ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list: any[] = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }
  onShrink() {
    this.wildState = 'shrunken';
  }
  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}