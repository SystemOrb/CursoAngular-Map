import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
Map
*/
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { MapDialogComponent } from './components/map/map-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapDialogComponent
  ],
  entryComponents: [
    MapDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfbR2CGciNvrhiAcF2MWq9nQkXu9FTVCc'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
