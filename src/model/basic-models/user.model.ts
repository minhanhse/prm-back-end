import { Column, Model, PrimaryKey, Table, HasMany } from "sequelize-typescript";
import { History } from "./history.model";
@Table
export class User extends Model<User> {

    @PrimaryKey
    @Column
    public email!: string;

    @Column
    public fullname!: string;

    @Column
    public phone!: string;

    @Column
    public password!: string;

    @Column
    public role!: string;

    @HasMany(() => History)
    public historys!: History[];
}
