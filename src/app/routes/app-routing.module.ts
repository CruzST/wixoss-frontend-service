import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeckBuilderPageComponent } from "../components/page-components/deck-builder-page/deck-builder-page.component";
import { HomePageComponent } from "../components/page-components/home-page/home-page.component";
import { LoginPageComponent } from "../components/page-components/login-page/login-page.component";
import { NoPageFoundComponent } from "../components/page-components/no-page-found/no-page-found.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'deckBuilder', component: DeckBuilderPageComponent},
    {path: '**', component:NoPageFoundComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) export class AppRoutingModule {

};