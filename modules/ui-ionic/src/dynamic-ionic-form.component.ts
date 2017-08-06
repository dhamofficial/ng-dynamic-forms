import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicFormComponent,
    DynamicFormControlEvent,
    DynamicFormControlModel,
    DynamicTemplateDirective
} from "@ng2-dynamic-forms/core";
import { DynamicIonicFormControlComponent } from "./dynamic-ionic-form-control.component";

@Component({

    moduleId: module.id,
    selector: "dynamic-ionic-form",
    templateUrl: "./dynamic-ionic-form.component.html"
})
export class DynamicIonicFormComponent extends DynamicFormComponent {

    @Input() group: FormGroup;
    @Input() hasErrorMessaging: boolean = false;
    @Input() model: DynamicFormControlModel[];

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

    @ViewChildren(DynamicIonicFormControlComponent) components: QueryList<DynamicIonicFormControlComponent>;
}