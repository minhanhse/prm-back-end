import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { User } from "./user.model";

@Table
export class History extends Model<History> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public id!: string;

    @Column
    public destination!: string;

    @Column
    public distance!: number;

    @Column
    public rating!: number;

    @Column
    public location!: string;

    @Column
    public timestamp!: Date;

    @ForeignKey(() => User)
    @Column
    public email!: string;

    @BelongsTo(() => User, "email")
    public User!: User;

}
