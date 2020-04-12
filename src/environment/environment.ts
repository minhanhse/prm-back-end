export const environment = {
    apiLink: {
        basic: {
            history: {
                getById: "/api/History/:id",
                main: "/api/History",
            },
            user: {
                main: "/api/User",
                getById: "/api/User/:id",
            },
        },
        endPoint: "http://localhost:8888",
    },
    database: {
        config: {
            development: {
                username: "root",
                password: "123456cb",
                database: "bikebookingmanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            test: {
                username: "root",
                password: "123456cb",
                database: "bikebookingmanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            production: {
                username: "root",
                password: "123456cb",
                database: "bikebookingmanagement",
                host: "localhost",
                dialect: "mysql",
            },
        },
    },
    jwt: {
        code: "vzicqoasanQhtZicTmeGsBpacNomny",
        issue: "bike-booking-management",
        subject: "analalayker@gmail.com",
    },
};
