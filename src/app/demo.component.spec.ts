import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DemoAppComponent } from '../app/demo.component';

beforeEachProviders(() => [DemoAppComponent]);

describe('App: Demo', () => {
  it('should create the app',
      inject([DemoAppComponent], (app: DemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demo works!\'',
      inject([DemoAppComponent], (app: DemoAppComponent) => {
    expect(app.title).toEqual('demo works!');
  }));
});
