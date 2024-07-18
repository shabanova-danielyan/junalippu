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

  export const bookingRouter = createTRPCRouter({ 
//The procedure "getSeat" gets: travel class and trip_id as an input from a user; 
// checks for available seats and 
// provides in return: a seat_id, seat_number, car_id and car_number.   

    getSeat: publicProcedure
    .input(z.object({ 
      travel_class: z.number(), 
      trip_id: z.string() }))
    .query(({ input }) => {
      const seatDetails = {
        seat_id: `query is not yet implemented`, 
        seat_number: `query is not yet implemented`,
        car_id: `query is not yet implemented`, 
        car_number: `query is not yet implemented`,
      }
      return seatDetails;
    }),

//The procedure "getReservation" gets as an input: 
// trip_id, seat_id, and car_id selected by the user. 
// It creates a record in the database that the seat is reserved. 
//This will be changed to a protected procedure after implementing auth.

    getReservation: publicProcedure 
      .input(z.object({ 
        trip_id: z.string(),
        seat_id: z.string(), 
        car_id: z.number() }))
      .mutation(async ({ input }) => {
        const reservation = {
          user_id: 'query is under construction',
          trip_id: 'query is under construction', //Note for backend: add a column   
          dep_stop_id: 'query is under construction', //Note for backend: add a column 
          arriv_stop_id: 'query is under construction', //Note for backend: add a column    
          seat_id: 'query is under construction',
          car_id: 'query is under construction'
          }
        }),
    });