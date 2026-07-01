import { TemplateRef } from "@angular/core";

export interface ModalConfig {
    header?: TemplateRef<unknown>;
    body?: TemplateRef<unknown>;
    footer?: TemplateRef<unknown>;
}