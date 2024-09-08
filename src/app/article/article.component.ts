import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  titreArticle: string = "Moto wave"
  prixArticle: number = 50
  descriptionArticle: string = "Voici la description du service ou produit"

  
  constructor(){}
  ngOnInit(): void {
      
  }
}
