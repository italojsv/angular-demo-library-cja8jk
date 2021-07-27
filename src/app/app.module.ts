import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SanitizerDemo } from './app.sanitizerdemo';
import { ElementRefDemo } from './app.elementrefdemo';
import { WebStorageDemo } from './app.webstoragedemo';
import { UpdateNameDirective } from './app.updatenamedirective';
import { AuthZDemo } from './app.authzdemo';
import { Admin } from './app.admin';
import { AppComponent } from './app.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import { AuthGuardService as AuthGuard } from './app.auth-guard-service';
import { Home } from './app.home'

//enableProdMode();

const appRoutes: Routes = [
   { path: 'Sanitizer', component: SanitizerDemo },
   { path: 'ElementRef', component: ElementRefDemo },
   { path: 'WebStorage', component: WebStorageDemo },
   { path: 'AuthZDemo', component: AuthZDemo },
   { path: 'Admin', component: Admin, canActivate: [AuthGuard] },
   { path: '**', component: Home }
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(appRoutes),
                  MatAutocompleteModule,
                  MatBadgeModule,
                  MatBottomSheetModule,
                  MatButtonModule,
                  MatButtonToggleModule,
                  MatCardModule,
                  MatCheckboxModule,
                  MatChipsModule,
                  MatDatepickerModule,
                  MatDialogModule,
                  MatDividerModule,
                  MatExpansionModule,
                  MatGridListModule,
                  MatIconModule,
                  MatInputModule,
                  MatListModule,
                  MatMenuModule,
                  MatNativeDateModule,
                  MatPaginatorModule,
                  MatProgressBarModule,
                  MatProgressSpinnerModule,
                  MatRadioModule,
                  MatRippleModule,
                  MatSelectModule,
                  MatSidenavModule,
                  MatSliderModule,
                  MatSlideToggleModule,
                  MatSnackBarModule,
                  MatSortModule,
                  MatStepperModule,
                  MatTableModule,
                  MatTabsModule,
                  MatToolbarModule,
                  MatTooltipModule,
                  MatTreeModule,
                  BrowserAnimationsModule,
                  AngularWebStorageModule
                ],
  declarations: [ AppComponent, SanitizerDemo, ElementRefDemo, UpdateNameDirective, WebStorageDemo, AuthZDemo, Admin, Home ],
  providers: [AuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

