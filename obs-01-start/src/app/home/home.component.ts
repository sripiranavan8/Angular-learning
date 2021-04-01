import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    // const customIntevalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });
    const customIntevalObservable: Observable<number> = new Observable((observer) => {
      let count: number = 0;
      setInterval(() => {
        if (count === 3) {
          observer.complete();
        }
        if (count > 4) {
          observer.error("count is greater tha four")
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntevalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return "Round " + (data);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error)
    }, () => {
      console.log("Completed!")
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
