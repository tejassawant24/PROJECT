export class Regx {
  static Username(control) {
    let regx = /^[a-zA-Z\-]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { username: true };
  }
  static Password(control) {}
  static Email(control) {}
}
