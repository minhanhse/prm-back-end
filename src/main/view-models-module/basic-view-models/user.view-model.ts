import { HistoryVM } from "./history.view-model";

export class UserCM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public role: string;
    constructor(model: UserCM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class UserUM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public role: string;
    constructor(model: UserUM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class UserVM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public historys: HistoryVM[];
    public role: string;
    constructor(model: UserVM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.historys = model.historys;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export const UserSwagger = {
    definitions: {
        UserCM: {
            additionalProperties: false,
            properties: {
                email: {
                    minLength: 1,
                    title: "email",
                    type: "string",
                },
                phone: {
                    minLength: 1,
                    title: "phone",
                    type: "string",
                },
                fullname: {
                    minLength: 1,
                    title: "fullname",
                    type: "string",
                },
                password: {
                    minLength: 1,
                    title: "password",
                    type: "string",
                },
                role: {
                    minLength: 1,
                    title: "role",
                    type: "string",
                },
            },
            required: [],
            type: "object",
        },
        UserUM: {
            additionalProperties: false,
            properties: {
                email: {
                    minLength: 1,
                    title: "email",
                    type: "string",
                },
                phone: {
                    minLength: 1,
                    title: "phone",
                    type: "string",
                },
                fullname: {
                    minLength: 1,
                    title: "fullname",
                    type: "string",
                },
                password: {
                    minLength: 1,
                    title: "password",
                    type: "string",
                },
                role: {
                    minLength: 1,
                    title: "role",
                    type: "string",
                },
            },
            required: [],
            type: "object",
        },
    },
    paths: {
        "/api/User": {
            get: {
                tags: ["User"],
                operationId: "User_Get",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            post: {
                tags: ["User"],
                operationId: "User_Post",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "model",
                    "in": "body",
                    "required": true,
                    "schema": {
                        $ref: "#/definitions/UserCM",
                    },
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            put: {
                tags: ["User"],
                operationId: "User_Put",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "model",
                    "in": "body",
                    "required": true,
                    "schema": {
                        $ref: "#/definitions/UserUM",
                    },
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
        },
        "/api/User/{id}": {
            get: {
                tags: ["User"],
                operationId: "User_GetById",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "id",
                    "in": "path",
                    "type": "string",
                    "required": true,
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
            delete: {
                tags: ["User"],
                operationId: "User_Delete",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",

                ],
                parameters: [{
                    "name": "id",
                    "in": "path",
                    "type": "string",
                    "required": true,
                    "x-nullable": false,
                }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                    JWT: [],
                }],
            },
        },
    },
};
