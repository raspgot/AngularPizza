import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styles: [`
        .navbar {
            margin-bottom: 20px;
        }
    `]
})
export class MenuComponent {
    isCollapsed = false;
    @Input() title;

    toggleCollapseNavbar () {
        this.isCollapsed = !this.isCollapsed;
    }
}