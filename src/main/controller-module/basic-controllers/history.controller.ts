import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { History } from "src/model";
import { IBaseService, BaseService } from "src/service";
import { HistoryCM, HistoryUM, HistoryVM } from "../../view-models-module";

export class HistoryController {
    private service: IBaseService<History>;
    constructor(sequelize: Sequelize) {
        this.service = new BaseService<History>(History, sequelize);
    }

    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const data = new HistoryCM(req.body).getData();
        await this.service.useCreate(data)
            .then((model) => {
                return res.status(201).json(new HistoryVM({ ...model.get() as HistoryVM }).getData());
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const data = new HistoryUM({ ...req.body }).getData();
        await this.service.useUpdate(data, { id: data.id })
            .then((model) => {
                return res.status(200).json(model);
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ id: req.params.id }, []).then(
            async (model) => {
                if (model != null) {
                    await this.service.useRemove({ id: req.params.id })
                        .then(() => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));

    }
    public useGetAll = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetAll({ ...req.query }, []).then((list) => {
            const arr = list.map((model) => new HistoryVM({ ...model.get() as HistoryVM }).getData()).filter((model) => model.Name !== "Admin");
            return res.status(200).json(arr);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public useGetById = async (req: Request, res: Response, next: NextFunction) => {
        await this.service.useGetOne({ id: req.params.id }, [])
            .then((model) => {
                return model != null ? res.status(200).json(new HistoryVM({ ...model.get() as HistoryVM }).getData())
                    : res.status(404).json({ message: "Không tìm thấy" });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
