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
  urlImage: string = "https://via.placeholder.com/286x180"
  AltImage: string= "Image du produit"
  nombreJaime: number = 0

  constructor(){}
  ngOnInit(): void {
      
  }

  onLike(){
    this.nombreJaime++;
  }


}
