import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const modulosMat = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulosMat
  ],
  exports: [
    modulosMat
  ]
})
export class MaterialModule { }
