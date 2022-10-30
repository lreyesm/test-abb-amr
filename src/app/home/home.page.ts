import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    options: string[];

    currentOption: string;
    notShowingDropdownItems: boolean;

    constructor() {
        this.notShowingDropdownItems = true;
        this.options = [
            'Custom dropdown test',
            'Second dropdown test',
            'Third dropdown test',
            'Another one',
            'But not less important',
            'The latest option in the dropdown',
        ];
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow-div')) {
                var dropdowns = document.getElementsByClassName('dropdown-content');
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                        this.notShowingDropdownItems = true;
                    }
                }
            }
        };
    }

    ngOnInit(): void {
        this.currentOption = this.options[0];
    }

    handleChange(option: any) {
        this.currentOption = option;
    }

    toggleShow() {
        console.log('============= myFunction =============');
        document.getElementById('myDropdown').classList.toggle('show');
        this.notShowingDropdownItems = !this.notShowingDropdownItems;
    }
}
