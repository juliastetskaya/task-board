import { HttpResponse } from "msw";
import { http } from "../http";
import type { ApiSchemas } from "../../schema";

const boards: ApiSchemas["Board"][] = [
    {
        id: "1",
        name: "Feature Backlog",
    },
    {
        id: "2",
        name: "Design Sprint",
    },
    {
        id: "3",
        name: "Release Planning",
    },
];

export const handlers = [
    http.get("/boards", () => {
        return HttpResponse.json(boards);
    }),
    http.post("/boards", async (res) => {
        const { name } = await res.request.json();
        const board = {
            id: crypto.randomUUID(),
            name,
        };

        boards.push(board);
        return HttpResponse.json(board);
    }),
    http.delete("/boards/{boardId}", ({ params }) => {
        const { boardId } = params;
        const index = boards.findIndex((board) => board.id === boardId);
        if (index === -1) {
            return HttpResponse.json(
                { message: "Board not found", code: "NOT_FOUND" },
                { status: 404 },
            );
        }
        boards.splice(index, 1);
        return HttpResponse.json({ message: "Board deleted", code: "OK" });
    }),
];
