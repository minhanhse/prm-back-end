import { Model, Repository, Sequelize } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";

export interface IBaseRepository<T extends Model> {
    useCreate: (model: T) => Promise<T>;
    useUpdate: (model: T, expression: WhereOptions) => Promise<[number, T[]]>;
    useRemove: (expression: WhereOptions) => Promise<number>;
    useGetAll: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T[]>;
    useGetOne: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T>;
}

export class BaseRepository<T extends Model> implements IBaseRepository<T> {

    private repository: Repository<T>;
    constructor(model: new () => T, sequelize: Sequelize) {
        this.repository = sequelize.getRepository(model);
    }
    public useCreate = (model: T): Promise<T> => {
        return this.repository.create(model);
    }
    public useUpdate = (model: T, expression: WhereOptions): Promise<[number, T[]]> => {
        return this.repository.update(model, { where: expression });
    }
    public useRemove = (expression: WhereOptions): Promise<number> => {
        return this.repository.destroy({ where: expression });
    }
    public useGetOne = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.findOne({ where: expression, include: models });
    }
    public useGetAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.findAll({ include: models, where: expression });
    }
}
