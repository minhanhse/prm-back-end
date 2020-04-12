// extra view-models
import { UserSwagger, UserCM, UserUM, UserVM } from "./basic-view-models/user.view-model";

// basic view-models
import { HistoryCM, HistorySwagger, HistoryUM, HistoryVM } from "./basic-view-models/history.view-model";

// extra view-models
export * from "./basic-view-models/user.view-model";

// basic view-models
export * from "./basic-view-models/history.view-model";

export const VIEWMODELS = [
    UserCM, UserUM, UserVM,
    HistoryCM, HistoryUM, HistoryVM,
];
export const SWAGGERS = [
    UserSwagger,
    HistorySwagger,
];
