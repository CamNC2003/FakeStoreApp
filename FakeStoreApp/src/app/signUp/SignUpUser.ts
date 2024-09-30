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
    public lat: string,
    public long: string,
    public phone: string,
  ) {}
}
