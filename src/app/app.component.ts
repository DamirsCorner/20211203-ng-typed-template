import { Component } from '@angular/core';

interface Item {
  id: number;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topItems: Item[] = Array.from({ length: 5 }, (_, id) => ({
    id,
    label: `Top ${id}`,
  }));

  bottomItems: Item[] = Array.from({ length: 5 }, (_, id) => ({
    id,
    label: `Bottom ${id}`,
  }));

  toItem(item: Item): Item {
    return item;
  }
}
