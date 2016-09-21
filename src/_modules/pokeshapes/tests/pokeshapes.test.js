'use strict';

import Pokeshapes from '../pokeshapes';

describe('Pokeshapes View', function() {

  beforeEach(() => {
    this.pokeshapes = new Pokeshapes();
  });

  it('Should run a few assertions', () => {
    expect(this.pokeshapes).toBeDefined();
  });

});
