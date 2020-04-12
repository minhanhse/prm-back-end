import { NextFunction, Request, Response } from "express";
import { IBaseService, BaseService } from "src/service";
import { User, History } from "src/model";
import { UserCM, UserUM, UserVM, HistoryVM } from "../../view-models-module";
import { Sequelize, Repository } from "sequelize-typescript";

export class UserController {
    private service: IBaseService<User>;
    private historyRepository: Repository<History>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<User>(User, sequelize);
        this.historyRepository = sequelize.getRepository(History);
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const data = new UserCM(req.body).getData();
        await this.service.useCreate(data)
            .then((model) => {
                return res.status(201).json(new UserVM({ ...model.get() as UserVM }).getData());
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const data = new UserUM({ ...req.body }).getData();
        await this.service.useUpdate(data, { email: data.email })
            .then((model) => {
                return res.status(200).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ email: req.params.id }, []).then(
            async (model) => {
                if (model != null) {
                    await this.service.useRemove({ email: req.params.id })
                        .then(() => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.email });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({ ...req.query }, [this.historyRepository]).then((list) => {
            const arr: UserVM[] = list.map((model) => new UserVM({ ...model.get() as UserVM }).getData()).filter((model) => model.Name !== "Admin");
            arr.forEach((user) => {
                user.historys = user.historys.map((history) => new HistoryVM(history).getData());
            });
            return res.status(200).json(arr);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ email: req.params.id }, [this.historyRepository])
            .then((model) => {
                if (model != null) {
                    const data: UserVM = new UserVM({ ...model.get() as UserVM }).getData();
                    data.historys = data.historys.map((history) => new HistoryVM(history).getData());
                    res.status(200).json(data);
                } else {
                    return res.status(404).json({ message: "Không tìm thấy" });
                }
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
