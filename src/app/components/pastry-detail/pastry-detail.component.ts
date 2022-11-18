import { Component, OnInit, Input } from '@angular/core';
import { INGREDIENTS_LISTS } from 'src/app/data/mock-pastries';
import { List } from 'src/app/interfaces/list';
import { PastryService } from 'src/app/services/pastry.service';
import { Pastry } from '../../interfaces/pastry';

@Component({
  selector: 'app-pastry-detail',
  templateUrl: './pastry-detail.component.html',
  styleUrls: ['./pastry-detail.component.scss']
})
export class PastryDetailComponent implements OnInit {

  @Input() pastry: Pastry;

  ingredientsList: List[] = INGREDIENTS_LISTS;
  ingredients: Array<string> = [];
  list: List | undefined;
  isShown: boolean = true;

  constructor(private pastryService: PastryService) { }

  ngOnInit(): void { }

  ngOnchanges(): void {
    if (this.pastry) {
      this.list = this.pastryService.getPastryIngredientList(this.pastry.id);

      if (this.list)
        this.ingredients = this.list?.list;
    }
  }

 sortIngredientsByAlphabet() {
    return this.ingredients.sort();
  }

  addRecipe(event: Event) {
    const key = (event.target as HTMLInputElement).value;
    this.ingredients.push(key);
  }

  deleteRecipe(recipe: string) {
    const filtered = this.ingredients.filter((ingredient) => {
      return ingredient !== recipe;
    });
    this.ingredients = filtered;
  }

  toggleHide() {
    this.isShown = !this.isShown;
  }

}
