This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
yarn
```

After this, create a `.env` file and copy the contents of `.env.example` into `.env`.

Then, run the development environment:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful commands:

- `yarn drizzle:generate {name}` - generate a new migration after changing models.
- `yarn drizzle:migrate` - migrates all changes to be up to date with the drizzle schema.
- `yarn drizzle:seed` - seed db with test data.
- `yarn drizzle:drop` - drops all current data from db. (Warning, obviously removes data!!!)

## Notes:

- We want to achieve maximum of the server side rendering. So try to make most of your components serve side.
- All server actions must be annotated with 'use server' as their first line. This keeps them protected from client side.
- Wrap functions in `protect(fn)` if they need user token payload info OR need to be protected by unauthorized users.
- Ensure you are adding both locales when adding new messages / errors.
