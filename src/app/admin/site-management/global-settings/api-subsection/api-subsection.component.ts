import { Component, Input, Output, EventEmitter, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-api-subsection',
  templateUrl: './api-subsection.component.html',
  styleUrls: ['./api-subsection.component.scss']
})
export class ApiSubsectionComponent {
@Input() title: string = '';
  @Input() enableLabel: string = '';
  @Input() promptLabel: string = '';
  @Input() idPrefix: string = '';

  _isEnabled: boolean = false;
  _promptText: string = '';

  // Output for promptTextChange
  @Output() promptTextChange = new EventEmitter<string>();
  // Output for isEnabledChange (for the [(isEnabled)] binding)
  @Output() isEnabledChange = new EventEmitter<boolean>();


  // These are for ControlValueAccessor, but we are primarily using explicit Input/Output now
  // for promptText and isEnabled directly.
  onChange: any = () => {};
  onTouched: any = () => {};

  get isEnabled(): boolean {
    return this._isEnabled;
  }

  @Input()
  set isEnabled(value: boolean) {
    if (this._isEnabled !== value) {
      this._isEnabled = value;
      this.isEnabledChange.emit(value); // Emit change
    }
  }

  get promptText(): string {
    return this._promptText;
  }

  @Input()
  set promptText(value: string) {
    if (this._promptText !== value) {
      this._promptText = value;
      this.promptTextChange.emit(value); // Emit change
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // --- ControlValueAccessor methods (less relevant if using explicit I/O for main values) ---
  writeValue(value: any): void {
    // This is primarily for the ngModel binding if you were to use it directly on the component itself
    // For specific inputs like promptText, the @Input/@Output approach is often cleaner.
    // If you remove NG_VALUE_ACCESSOR, you can remove this.
  }

  registerOnChange(fn: any): void {
    // If you remove NG_VALUE_ACCESSOR, you can remove this.
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // If you remove NG_VALUE_ACCESSOR, you can remove this.
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // If you remove NG_VALUE_ACCESSOR, you can remove this.
  }

  // Internal method to handle textarea input
  onTextareaInput(event: Event): void {
    this.promptText = (event.target as HTMLTextAreaElement).value;
  }

  // Internal method to handle toggle change
  onToggleChange(event: Event): void {
    this.isEnabled = (event.target as HTMLInputElement).checked;
  }
}
