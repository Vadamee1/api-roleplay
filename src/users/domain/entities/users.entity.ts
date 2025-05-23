export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public profileImage: string | null,
    public createdAt: Date,
    public updatedAt: Date | null,
    public deletedAt: Date | null,
  ) {}
}
