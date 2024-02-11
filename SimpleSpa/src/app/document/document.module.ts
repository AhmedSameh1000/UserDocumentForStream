import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { MaterialModule } from '../material/material.module';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentFileDetailsComponent } from './document-file-details/document-file-details.component';

@NgModule({
  declarations: [DocumentListComponent, CreateDocumentComponent, DocumentFileDetailsComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DocumentModule {}
