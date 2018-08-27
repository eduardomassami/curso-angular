import { NotificationService } from './messages/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  providers: [NotificationService],
  exports: [InputComponent, RadioComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule { }
