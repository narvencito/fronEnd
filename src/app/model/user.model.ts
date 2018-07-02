import { ParentEntity } from './ParentEntity.model';

export class UserModel extends ParentEntity {
  public firstname: string;
  public secondname: string;
  public firstsurname: string;
  public secondsurname: string;
  public phone: string;
  public address: string;
}
