export class HistoryCM {
    public destination: string;
    public distance: number;
    public rating: number;
    public location: string;
    public timestamp: Date;
    public email: string;
    constructor(model: HistoryCM) {
        this.destination = model.destination;
        this.distance = model.distance;
        this.rating = model.rating;
        this.location = model.location;
        this.timestamp = model.timestamp;
        this.email = model.email;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class HistoryUM {
    public id: string;
    public destination: string;
    public distance: number;
    public rating: number;
    public location: string;
    public timestamp: Date;
    public email: string;
    constructor(model: HistoryUM) {
        this.id = model.id;
        this.destination = model.destination;
        this.distance = model.distance;
        this.rating = model.rating;
        this.location = model.location;
        this.timestamp = model.timestamp;
        this.email = model.email;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class HistoryVM {
    public id: string;
    public destination: string;
    public distance: number;
    public rating: number;
    public location: string;
    public timestamp: Date;
    public email: string;
    constructor(model: HistoryVM) {
        this.id = model.id;
        this.destination = model.destination;
        this.distance = model.distance;
        this.rating = model.rating;
        this.location = model.location;
        this.timestamp = model.timestamp;
        this.email = model.email;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export const HistorySwagger = {
    definitions: {
        HistoryCM: {
            additionalProperties: false,
            properties: {
                destination: {
                    minLength: 1,
                    title: "destination",
                    type: "string",
                },
                distance: {
                    title: "distance",
                    type: "number",
                },
                rating: {
                    title: "Name",
                    type: "number",
                },
                location: {
                    minLength: 1,
                    title: "location",
                    type: "string",
                },
                timestamp: {
                    minLength: 1,
                    title: "timestamp",
                    type: "string",
                    format: "date",
                },
                email: {
                    minLength: 1,
                    title: "email",
                    type: "string",
                },
            },
            required: [],
            type: "object",
        },
        HistoryUM: {
            additionalProperties: false,
            properties: {
                id: {
                    minLength: 1,
                    title: "id",
                    type: "string",
                },
                destination: {
                    minLength: 1,
                    title: "destination",
                    type: "string",
                },
                distance: {
                    title: "distance",
                    type: "number",
                },
                rating: {
                    title: "Name",
                    type: "number",
                },
                location: {
                    minLength: 1,
                    title: "location",
                    type: "string",
                },
                timestamp: {
                    minLength: 1,
                    title: "timestamp",
                    type: "string",
                    format: "date",
                },
                email: {
                    minLength: 1,
                    title: "email",
                    type: "string",
                },
            },
            required: [],
            type: "object",
        },
    },
    paths: {
        "/api/History": {
            get: {
                tags: ["History"],
                operationId: "History_Get",
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
                tags: ["History"],
                operationId: "History_Post",
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
                        $ref: "#/definitions/HistoryCM",
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
                tags: ["History"],
                operationId: "History_Put",
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
                        $ref: "#/definitions/HistoryUM",
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
        "/api/History/{id}": {
            get: {
                tags: ["History"],
                operationId: "History_GetById",
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
                    "format": "uuid",
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
                tags: ["History"],
                operationId: "History_Delete",
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
                    "format": "uuid",
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
