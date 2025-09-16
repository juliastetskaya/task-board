import { setupWorker } from "msw/browser";
import { authHandlers, boardsHandlers } from "./handlers";

export const worker = setupWorker(...authHandlers, ...boardsHandlers);
