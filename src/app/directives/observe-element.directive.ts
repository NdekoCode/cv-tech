import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[appObserveElement]',
  exportAs: 'intersection',
})
@Directive({
  selector: '[appIntersectionObserver]',
})
export class ObserveElementDirective implements OnInit {
  @Input() ratio: number = 0.1;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.ratio,
    };

    const handleIntersect: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > this.ratio) {
          entry.target.classList.remove('reveal');
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    this.observer = new IntersectionObserver(handleIntersect, options);
    this.observer.observe(this.el.nativeElement);
  }
}
