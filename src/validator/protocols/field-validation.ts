export interface FieldValidation {
  error: Error | null
  validate (inputValue: any, field?: string): Error | null
}
