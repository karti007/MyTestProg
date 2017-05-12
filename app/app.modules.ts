import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ArtistItemComponent } from './component.artist-item';
import { ArtistDetailsComponent } from './component.artist-details';

import { SearchPipe } from './pipe.search';

@NgModule({
    imports: [ //which features of angular we need in our module
        BrowserModule, FormsModule
        ],
    declarations: [ //which components i will use in my app
        AppComponent, ArtistItemComponent, ArtistDetailsComponent, SearchPipe
        ],
    bootstrap: [ //which is the main root component that will launch in our app
        AppComponent
        ]
})

export class AppModule {}