export class CreateUserDto {
  id: string;
  name: string;
  email?: string;
  password: string;
  createTimeStamp: Date;
}
