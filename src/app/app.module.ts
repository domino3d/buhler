import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationComponent,
    HttpClientModule,
  ],
  exports: [AppRoutingModule, NavigationComponent],
  providers: [HttpClientModule],
  // bootstrap: [AppComponent],
})
export class AppModule {}
