import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent, interval, merge, timer, combineLatest, concat, empty, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, mergeAll, mergeMapTo, catchError, take, combineAll, mapTo, startWith, withLatestFrom, scan, tap, delay, concatAll, mergeMap } from 'rxjs/operators';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive Programming Concept';
  numbers: number[] = [];
  val1: number = 0;
  filteredNumbers: number[] = [];
  val2: number = 0;
  processedNumbers: number[] = [];
  val3: number = 0;
  apiMessage: string;
  counter: number = 0;

  ngOnInit() {
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    //observer
    const observer = {
      next: (num: number) => {
        this.numbers.push(num);
        this.val1 += num
      },
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation Completed")
    };
    numbers$.subscribe(observer);

    const filterFn = filter((num: number) => num > 5);

    const filteredNumbers = filterFn(numbers$);
    filteredNumbers.subscribe((num: number) => {
      this.filteredNumbers.push(num);
      this.val2 += num
    });
    const mapFn = map((num: number) => num + num);

    const processedNumbers$ = numbers$.pipe(filterFn, mapFn);
    processedNumbers$.subscribe((num: number) => {
      this.processedNumbers.push(num);
      this.val3 += num
    });

    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: { 'Content-Type': 'application/text' },
      body: "Hello"
    });
    api$.subscribe(res => this.apiMessage = res.response.data);

    const clickEvent$ = fromEvent(document.getElementById('counter'), 'click');
    clickEvent$.subscribe(() => this.counter++);

    //combineAll
    const source$ = interval(1000).pipe(take(2));

    const example$ = source$.pipe(
      map(val => interval(1000).pipe(
        map(i => `Result (${val}): ${i}`),
        take(5)
      ))
    )
    example$
      .pipe(combineAll())
      .subscribe(console.log);

    //Combining observables emitting at 3 intervals
    const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(([timerValOne, timerValTwo, timerValThree]) => {
      console.log(
        `Timer One Latest : ${timerValOne},
      Timer Two Latest : ${timerValTwo},
      Timer Three Latest : ${timerValThree}`
      );
    });

    //combineLatest with projection function
    combineLatest(
      timerOne$,
      timerTwo$,
      timerThree$,
      (one, two, three) => {
        return ` Timer One (Proj) Latest : ${one},
      Timer Two (Proj) Latest : ${two},
      Timer Three (Proj) Latest : ${three}`;
      }

    ).subscribe(console.log);

    //Combining events from 2 buttons
    const redTotal = document.getElementById('red-total');
    const blackTotal = document.getElementById('black-total');
    const total = document.getElementById('total');

    const addOneClick$ = id =>
      fromEvent(document.getElementById(id), 'click').pipe(
        mapTo(1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      );

    combineLatest(addOneClick$('red'), addOneClick$('black')).subscribe(
      ([red, black]: any) => {
        redTotal.innerHTML = red;
        blackTotal.innerHTML = black;
        total.innerHTML = red + black;
      }
    );

    //Basic concat usage with three observables
    concat(
      of(1, 2, 3),
      of(4, 5, 6),
      of(7, 8, 9)
    ).subscribe(console.log);

    //Display message using concat with delayed observables
    const userMessage = document.getElementById('message');

    const delayedMessage = (message, delayedTime = 1000) => {
      return empty().pipe(startWith(message), delay(delayedTime));
    };
    concat(
      delayedMessage('Get Ready!'),
      delayedMessage(3),
      delayedMessage(2),
      delayedMessage(1),
      delayedMessage('Go!'),
      delayedMessage('', 2000)
    ).subscribe((message: any) => (userMessage.innerHTML = message));

    //concatAll with observable
    const source = interval(2000);
    const example = source.pipe(
      map(val => of(val + 10)),
      concatAll()
    );
    const subscribe = example.subscribe(val => console.log('Example with Basic Observable : ', val));

    //concatAll with promise
    const samplePromise = val => new Promise(resolve => resolve(val));
    const sourcePromise = interval(2000);

    const examplePromise = sourcePromise.pipe(
      map(val => samplePromise(val)),
      concatAll()
    );
    const subscribePromise = examplePromise.subscribe(val => console.log('Example with Promise :', val));

    //Making a variable number of requests (uses deprecated API)
    const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved : ${val}`), 5000));
    const sourceforkJoin = of([1, 2, 3, 4, 5]);
    const exampleforkJoin = sourceforkJoin.pipe(mergeMap(q => forkJoin(...q.map(myPromise))));
    const subscribeforkJoin = exampleforkJoin.subscribe(val => console.log(val));

    //forkJoin in Angular
    const observable = forkJoin([
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(4000)
    ]);
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });

    //merge
    const first = interval(2500);
    const second = interval(2000);
    const third = interval(1500);
    const fourth = interval(1000);

    const exampleMerge = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );
    const subscribeMerge = exampleMerge.subscribe(val => console.log(val));

    //mergeAll
    const promiseMerge = val => new Promise(resolve => setTimeout(() => resolve(`Result : ${val}`), 2000));

    const sourceMerge = of(1, 2, 3);

    const exampleMergeAll = sourceMerge.pipe(
      map(val => promiseMerge(val)),
      mergeAll()
    );

    const subscribeMergeAll = exampleMergeAll.subscribe(val => console.log(val));

    //startWith for initial scan value
    const sourceStartWith = of('World!', 'GoodBye', 'World!');

    const exampleStartWith = sourceStartWith.pipe(
      startWith('Hello'),
      scan((acc, curr) => `${acc} ${curr}`)
    );
    const subscribeStartWith = exampleStartWith.subscribe(val => console.log(val));

    //Latest value from quicker second source
    const sourceLatest = interval(5000);
    const secondSource = interval(1000);
    const exampleLatest = sourceLatest.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s) : ${second}`;
      })
    );
    const subscribeLatest = exampleLatest.subscribe(val => console.log(val));

    //Slower second source
    const exampleLatestFrom=secondSource.pipe(
      withLatestFrom(sourceLatest),
      map(([first,second])=>{
        return `Source (1s) : ${first} Latest Form (5s) : ${second}`;
      })
    );
    const subscribeLatestFrom=exampleLatestFrom.subscribe(val=>console.log(val));

    //ajax example
    const githubUsers=`https://api.github.com/users?per_page=2`;
    const users=ajax.getJSON(githubUsers);
    const subscribeAjax=users.subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );

    //Observable that emits even numbers on timer
    const evenNumbers=Observable.create(function(observer){
      let value=0;
      const interval=setInterval(()=>{
        if(value % 2 === 0){
          observer.next(value);
        }
        value ++;
      },1000);
      return ()=> clearInterval(interval);
    });
    const subscribeCreate=evenNumbers.subscribe(val=>console.log(`Create Even Numbers : ${val}`));

    setTimeout(()=>{
      subscribeCreate.unsubscribe();
    },10000);

    // from Observable from string
    const sourceFrom=from('Hello World');
    const subscribeFrom=sourceFrom.subscribe(val=>console.log(val));
  }
}
