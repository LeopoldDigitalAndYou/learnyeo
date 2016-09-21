'use strict';

import Hello from '../hello';

describe('Hello View', function() {

  beforeEach(() => {
    this.hello = new Hello();
  });

  it('Should run a few assertions', () => {
    expect(this.hello).toBeDefined();
  });

});
