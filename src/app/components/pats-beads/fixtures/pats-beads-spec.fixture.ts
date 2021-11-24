import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { PatsBeadsComponent } from "../pats-beads.component";

export class PatsBeadsSpecFixture {

  constructor(private fixture: ComponentFixture<PatsBeadsComponent>) { }

  get patsBeadsHighlightDivDebugElement(): DebugElement {
    return this.fixture.debugElement.query(By.css('#patsBeadsHighlightDiv'));
  }

  get patsBeadsHighlightDivElement(): HTMLElement {
    return this.patsBeadsHighlightDivDebugElement?.nativeElement;
  }
  
}