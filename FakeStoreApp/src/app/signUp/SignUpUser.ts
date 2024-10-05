export class SignUpUser {
  constructor(
    public email: string,
    public username: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public city: string,
    public street: number,
    public number: string,
    public zipcode: string,
    public phone: string,
  ) {}
}
