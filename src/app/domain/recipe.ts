/**
 * Created by I67083 on 2/22/2017.
 */
import { RecipeCategory } from './recipecategory';

export interface Recipe {
  _id: number;
  name: string;
  desc: string;
  time: string;
  servings: number;
  category: string;
  instructions: string;
  shoppingList: boolean;
}
