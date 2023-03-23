import { Entity, Column, BaseEntity, Index, PrimaryColumn } from "typeorm";

@Entity("user")
export class User extends BaseEntity{
  @PrimaryColumn()
  address?: string;

  constructor(address: string) {
    super();
    this.address = address;
  }
}
