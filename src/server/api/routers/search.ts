import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

interface Context {
    db: PrismaClient;
  }

type Station = {
  name: string;
};  

export const stationRouter = createTRPCRouter({
  getStationName: publicProcedure.query(async ({ ctx }) => {
      return ctx.db.station.findMany({
          select: {
              name: true,
          },
          });
      }),
});

