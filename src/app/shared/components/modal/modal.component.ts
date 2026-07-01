import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ModalConfig } from './modal.config';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  readonly data = inject(DIALOG_DATA) as ModalConfig;
  readonly dialogRef = inject(DialogRef<unknown>);


  close(result?: unknown): void {
    this.dialogRef.close(result);
  }
}
