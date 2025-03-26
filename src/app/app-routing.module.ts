import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', // Quando o caminho da URL estiver vazio (página inicial)
    component: HomeComponent // Mostra o componente da Home
  },
  {
    path: 'content/:id', // Quando a URL for /content/algum-id (ex: /content/2)
    component: ContentComponent // Mostra o componente de conteúdo (receita)
  }
];

// Declara o módulo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas principais da aplicação
  exports: [RouterModule] // Exporta para que outros arquivos possam usar o roteamento
})
export class AppRoutingModule { } // Exporta a classe de rotas para o app usar
