/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeEditService } from './recipe-edit.service';

describe('RecipeEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeEditService]
    });
  });

  it('should ...', inject([RecipeEditService], (service: RecipeEditService) => {
    expect(service).toBeTruthy();
  }));
});
