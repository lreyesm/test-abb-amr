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

    /**
     * @brief Class constructor. Initializes the variavbles and fucntions
     */
    constructor() {
        this.notShowingDropdownItems = true; //boolean that contains the showing state of dropdown
        this.options = [
            // Options in the dropdown
            'Custom dropdown test',
            'Second dropdown test',
            'Third dropdown test',
            'Another one',
            'But not less important',
            'The latest option in the dropdown',
        ];
        this.currentOption = this.options[0];
        window.onclick = this.onWindowClicked;
    }

    /**
     * @brief Funtion to attend the mouse click events
     *
     * @param  {PointerEvent} event  Mouse clicke event slot
     * @returns void
     */
    onWindowClicked(event: PointerEvent): void {
        if (
            !event.target['matches']('.dropbtn') &&
            !event.target['matches']('.arrow_div') &&
            !event.target['matches']('.arrow-image')
        ) {
            var dropdowns = document.getElementsByClassName('dropdown_content');
            for (let i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    this.notShowingDropdownItems = true;
                }
            }
        }
    }

    /**
     * @brief On change selected item in dropdown function.
     * Set to currentOption the selected item
     *
     * @param  {string} option Option selected
     * @returns void
     */
    handleChange(option: string): void {
        this.currentOption = option;
    }

    /**
     * @brief Toggles the viewing state of dropdown items
     *
     * @returns void
     */
    toggleShow(): void {
        document.getElementById('myDropdown').classList.toggle('show');
        this.notShowingDropdownItems = !this.notShowingDropdownItems;
    }
}
