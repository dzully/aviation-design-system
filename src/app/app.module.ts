import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatBadgeModule } from '@angular/material/badge';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailBoxComponent } from './main/component/card-detail-box/card-detail-box.component';
import { CardDetailComponent } from './main/component/card-detail/card-detail.component';
import { GraphComponent } from './main/component/graph/graph.component';
import { HeaderComponent } from './main/component/header/header.component';
import { SidebarComponent } from './main/component/sidebar/sidebar.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HelloWorldComponent } from './main/pages/hello-world/hello-world.component';
import { FooterComponent } from './main/pages/main/footer/footer.component';
import { MainComponent } from './main/pages/main/main.component';
import { GraphWavesComponent } from './main/pages/waves/graph-waves/graph-waves.component';
import { WavesComponent } from './main/pages/waves/waves.component';
import { CardBoxComponent } from './main/pages/weather/card-box/card-box.component';
import { WeatherComponent } from './main/pages/weather/weather.component';
import { WindComponent } from './main/pages/wind/wind.component';

const appRoutes: Routes = [
  { path: 'overview', component: MainComponent },
  { path: 'wind', component: WindComponent },
  { path: 'waves', component: WavesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'hellow-world', component: HelloWorldComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    WavesComponent,
    WeatherComponent,
    WindComponent,
    GraphComponent,
    CardDetailComponent,
    GraphWavesComponent,
    CardDetailBoxComponent,
    CardBoxComponent,
    FooterComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatOptionModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
