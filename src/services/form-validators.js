// validation de synthaxe du formulaire de creation :
export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Veuillez taper au moins ${min} lettre(s).`;
    }
  }
  static max(value, max) {
    if (value.length > max) {
      return `Veuillez taper au maximum ${max} lettre(s).`;
    }
  }
}
