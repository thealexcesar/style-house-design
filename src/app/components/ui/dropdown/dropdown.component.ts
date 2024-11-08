import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {EventListenerDirective} from '@directives/event-listener.directive';

@Component({
  selector: 'shd-dropdown',
  standalone: true,
  imports: [NgForOf, NgIf, TranslatePipe, EventListenerDirective],
  template: `
    <div class="relative" shdEventListener (clickOutside)="closeDropdown()" (escapeKey)="closeDropdown()">
      <button (click)="toggleDropdown()" (keydown.enter)="toggleDropdown()" (keydown.space)="toggleDropdown()" tabindex="0">
        <ng-content></ng-content>
      </button>

      <ul *ngIf="dropdownOpen" class="absolute right-0 w-48 bg-light border border-dark shadow-md py-2">
        <li *ngFor="let item of items" (click)="selectItem(item)" (keydown.enter)="selectItem(item)"
            (keydown.space)="selectItem(item)" tabindex="0"
            class="px-2 py-1 cursor-pointer hover:bg-light-tertiary border-b last:border-0 border-light-tertiary mx-2">
          {{ item.label | translate }}
        </li>
      </ul>
    </div>
  `
})
export class DropdownComponent {
  @Input() items: { key: string; label: string }[] = [];
  @Output() itemSelected = new EventEmitter<string>();
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectItem(item: { key: string; label: string }) {
    this.itemSelected.emit(item.key);
    this.dropdownOpen = false;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
}
