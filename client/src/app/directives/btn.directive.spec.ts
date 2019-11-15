import { BtnDirective } from './btn.directive';

describe('BtnDirective', () => {
  it('should create an instance', () => {
    const directive = new BtnDirective({ nativeElement: HTMLElement });
    expect(directive).toBeTruthy();
  });
});
