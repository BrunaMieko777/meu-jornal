import {Component} from "@angular/core";

@Component({
    selector:'app-noticia', 
    templateUrl: './noticia.component.html' 
})
export class NoticiaComponent {
noticias: string[]= [
    "Noticia 1", 
    "Noticia 2", 
    "Noticia 3", 
    "Noticia 4"];


}