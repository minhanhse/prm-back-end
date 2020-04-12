import { Application } from "express";
import { environment } from "src/environment/environment";
import { HistoryController } from "src/main";
import { Sequelize } from "sequelize-typescript";

export const useHistoryRouter = (app: Application, sequelize: Sequelize) => {
    const CONTROLLER = new HistoryController(sequelize);
    app.route(environment.apiLink.basic.history.main)
        .get((req, res, next) => {
            CONTROLLER.useGetAll(req, res, next);
        })
        .post((req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put((req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.history.getById)
        .get((req, res, next) => {
            CONTROLLER.useGetById(req, res, next);
        })
        .delete((req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
