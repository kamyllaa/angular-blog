import { Component, OnInit } from '@angular/core'; /* trazer funcionalidades prontas de bibliotecas
ou o proprio angular */

@Component({ /* é um decorator que transforma uma classe em um componente angular */
  selector: 'app-home', /* define o nome da tag HTML para usar esse componente */
  templateUrl: './home.component.html', /* o arquivo HTML que mostra o visual do componente
  (como ele aparece para o usuário) */
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { /* criando uma class chamada HomeComponent
  e que essa classe vai usar a funcionalidade do Angular chamada ngOnInit */

  constructor() { } /* é chamado quando o componente é criado */

  ngOnInit(): void { /* esse método é chamado automaticamente quando o componente
    é carregado na tela */
  }

}
