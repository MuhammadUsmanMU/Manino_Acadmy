// ai-writer-subsection.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ai-writer-subsection',
  templateUrl: './ai-writer-subsection.component.html',
  styleUrls: ['./ai-writer-subsection.component.scss']
})
export class AiWriterSubsectionComponent {
  @Input() title: string = '';
  @Input() enableLabel: string = '';
  @Input() promptLabel: string = '';
  @Input() idPrefix: string = ''; // Used for unique IDs for accessibility

  // Two-way binding for the toggle switch
  private _isEnabled: boolean = false;
  @Input()
  get isEnabled(): boolean {
    return this._isEnabled;
  }
  set isEnabled(value: boolean) {
    if (this._isEnabled !== value) {
      this._isEnabled = value;
      this.isEnabledChange.emit(this._isEnabled);
    }
  }
  @Output() isEnabledChange = new EventEmitter<boolean>();

  // Two-way binding for the prompt text area
  private _promptText: string = '';
  @Input()
  get promptText(): string {
    return this._promptText;
  }
  set promptText(value: string) {
    if (this._promptText !== value) {
      this._promptText = value;
      this.promptTextChange.emit(this._promptText);
    }
  }
  @Output() promptTextChange = new EventEmitter<string>();

  // Event handler for the "Reset section" button (if implemented at subsection level)
  onResetSection(): void {
    console.log(`Resetting section: ${this.title}`);
    this.isEnabled = false;
    this.promptText = '';
  }

  // Event handler for the "Save Changes" button (if implemented at subsection level)
  onSaveChanges(): void {
    // Similar to onResetSection, saving is typically handled at a higher level.
    console.log(`Saving changes for section: ${this.title}`);
    console.log(`Is Enabled: ${this.isEnabled}`);
    console.log(`Prompt Text: ${this.promptText}`);
  }
}