import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  let sanitizer: DomSanitizer;
  let pipe: SafeUrlPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeUrlPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});