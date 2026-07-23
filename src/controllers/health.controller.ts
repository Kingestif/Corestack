import type { Request, Response } from "express";

export const health = async (_req: Request, res: Response) => {
    res.status(200).json({
        status: "ok"
    })
}

export const readiness = async (_req: Request, res: Response) => {
    //TODO add database, redis....check
    res.status(200).json({
        status: "ready",
    })
}