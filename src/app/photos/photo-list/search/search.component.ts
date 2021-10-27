import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output()
  onTyping = new EventEmitter<string>();

  @Input()
  placeHolder: string = 'serach...';

  @Input()
  value: string = '';

  debounce: Subject<string> | any = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300))
    .subscribe((filter: any) => {
      this.onTyping.emit(filter.value);
    });

  }

   ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
