import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { LogService } from './log.service';
import { StarWarsService } from './star-wars.service';
import { TabsComponent } from './tabs/tabs.component';



const routes = [
  {
    path: 'characters', component: TabsComponent, children: [
      { path: '', redirectTo: "all", pathMatch:"full" },
      { path: ':side', component: ListComponent },
      { path: '**', redirectTo: "asd" }
    ]
  },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: "characters" }
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
