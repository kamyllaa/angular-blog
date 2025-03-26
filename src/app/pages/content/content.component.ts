import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public title: string = '';
  public description: string = '';
  public image: string = '';

  private dataFake = [
    {
      id: '2',
      title: 'Banoffe',
      description: `
        Uma torta deliciosa de banana com doce de leite e chantilly.<br><br>
        <b>Ingredientes:</b><br>
        - 200 g de bolacha maisena<br>
        - 100 g de manteiga amolecida<br>
        - 4 bananas caturras maduras<br>
        - 2 latas de leite condensado<br>
        - 1 pote de nata<br>
        - 4 colheres (sopa) rasas de açúcar<br>
        - canela em pó a gosto<br>
        - achocolatado em pó a gosto
      `,
      photoCover: 'assets/banner-banoffe.png'
    },
    {
      id: '3',
      title: 'Naked Cake',
      description: `
        Um bolo lindo e saboroso com frutas e sem cobertura.<br><br>
        <b>Ingredientes:</b><br>
        - 4 ovos<br>
        - 100 g de manteiga sem sal<br>
        - 1 e meia xícara (chá) de leite<br>
        - 2 e meia xícaras (chá) de farinha de trigo<br>
        - 1 colher (sopa) de fermento em pó<br>
        - 2 xícaras (chá) de frutas vermelhas (morango, framboesa, amora)<br><br>
        <b>Recheio:</b><br>
        - 3 gemas<br>
        - 1 leite condensado integral<br>
        - 2 colheres (sopa) de amido de milho<br>
        - 1 colher (chá) de essência de baunilha<br>
        - 1 caixinha de creme de leite<br>
      `,
      photoCover: "assets/banner-naked-cake.png"
    },
    {
      id: "4",
      title: "Red Velvet",
      description: `
        O clássico bolo vermelho aveludado com cobertura de cream cheese.<br><br>
        <b>Ingredientes:</b><br>
        - 1 xícara e meia (chá) de leite<br>
        - 1 colher (sopa) de suco de limão<br>
        - 1 xícara e meia (chá) de açucar<br>
        - 3 ovos<br>
        - 1 colher (sopa) de essência de baunilha<br>
        - 1 xícara e meia (chá) de farinha de trigo<br>
        - 1 colher (sopa) de chocolate em pó 50%
        - 1 colher (sopa) de fermento em pó<br>
        - 1 colher (chá) de corante líquido vermelho<br>
        <b>Recheio:</b><br>
        - 2 xícaras (chá) de cream cheese)<br>
        - meia xícara (chá) de manteiga sem sal em temperatura ambiente<br>
        - 1 colher (sopa) de essência de baunilha<br>
        - 1 xícara e meia (chá) de açucar de confeiteiro penerado.
      `,
      photoCover: "assets/banner-red-velvet.png"
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('🔍 ID da rota:', id);

      const recipe = this.dataFake.find(item => item.id === id);

      if (recipe) {
        this.title = recipe.title;
        this.description = recipe.description;
        this.image = recipe.photoCover;
        console.log('✅ Receita encontrada:', recipe);
        console.log('📋 Descrição:', recipe.description); // ← Aqui está o log
      } else {
        console.warn('❌ Receita não encontrada.');
      }
    });
  }
}
