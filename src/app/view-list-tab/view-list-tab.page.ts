import { Component } from '@angular/core';

@Component({
  selector: 'app-view-list-tab',
  templateUrl: 'view-list-tab.page.html',
  styleUrls: ['view-list-tab.page.scss']
})
export class ViewListTabPage {
  items: string[] = ["oranges", "bananas", ""]
  onEnterItem(item) {
    if (items[items.length - 1])
    console.log(this.items);
    console.log('Entered ' + item);
  }
}
