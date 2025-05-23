import { User } from '../entities/users.entity';

export class UsersBuilder {
  readonly #user: User;

  constructor(user?: User) {
    const now = new Date();
    this.#user = user
      ? new User(
          user.id,
          user.name,
          user.email,
          user.password,
          user.profileImage,
          user.createdAt,
          user.updatedAt,
          user.deletedAt,
        )
      : new User('', '', '', '', null, now, now, null);
  }

  id(id: string) {
    this.#user.id = id;
    return this;
  }

  name(name: string) {
    this.#user.name = name;
    return this;
  }

  email(email: string) {
    this.#user.email = email;
    return this;
  }

  password(password: string) {
    this.#user.password = password;
    return this;
  }

  profileImage(profileImage: string) {
    this.#user.profileImage = profileImage;
    return this;
  }

  createdAt(createdAt: Date) {
    this.#user.createdAt = createdAt;
    return this;
  }

  updatedAt(updatedAt: Date) {
    this.#user.updatedAt = updatedAt;
    return this;
  }

  deletedAt(deletedAt: Date) {
    this.#user.deletedAt = deletedAt;
    return this;
  }

  build() {
    return new User(
      this.#user.id,
      this.#user.name,
      this.#user.email,
      this.#user.password,
      this.#user.profileImage,
      this.#user.createdAt,
      this.#user.updatedAt,
      this.#user.deletedAt,
    );
  }
}
