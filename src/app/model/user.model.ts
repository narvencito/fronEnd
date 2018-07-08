import { ParentEntity } from './ParentEntity.model';

export class UserModel extends ParentEntity {
  public first_name: string;
  public second_name: string;
  public first_surname: string;
  public second_surname: string;
  public fhone: string;
  public address: string;
}
