import { Component } from '@angular/core';
import { Phrase } from './phrase';

const PHRASES: Phrase[] = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир!", language: "Russian" },
    { value: "Прывiтанне, сусвет!!", language: "Belarussian"}
];

@Component({
    selector: "hello-world-list",
    templateUrl: "app/hello-world-list/hello-world-list.component.html",
    styleUrls: ["app/hello-world-list/hello-world-list.component.css"]
})
export class HelloWorldListComponent {
    phraseList: Phrase[] = PHRASES;
    selectedPhraseLanguage: string;

    onSelect(selected: Phrase) {
        this.selectedPhraseLanguage = selected.language;
    }
}