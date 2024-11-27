To create a database:

1) Run command pnpm prisma db push - to create a database according to a 'schema.prisma' file
2) Run command: pnpm prisma generate - this generates Prisma Client for interaction with database
3) Run command: pnpm prisma studio - to open Prisma Studio to see data. Initially tables are empty.

To populate tables with data run Python script 'seeding.py' (needs pandas library to be installed). 