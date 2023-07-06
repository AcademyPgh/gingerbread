This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### first time setup

#### get config
Get the .env.local file from our secret google drive and put it in the root project directory. Make sure that it is named exactly `.env.local`

#### install dependencies
`npm install`

### every time
First, run the development server:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## handling the database
### direct DB access
* the database is hosted at https://app.planetscale.com/gingerbreadtiming/runnerbase, and login info is on the google drive
* you can run SQL queries against it directly when necessary through the console section
* NOTE: planetscale uses MYSQL(2); it DOES NOT accept foreign key constraints
### ORM db access
* generally, the application accesses the database through the drizzle ORM
* drizzle's documentation is accessible at https://orm.drizzle.team/docs/quick-start; it's more complete than it look but you'll probably have to dig through it a bit to find what you want and there won't be many examples
#### running migrations
* you can create migrations by modifying the "schema.ts" file in the db folder
* after editing the schema, run `npm run generate` to generate a migration based on the changes you have made to the schema
    * the migration generator doesn't have access to the actual state of the database, so it only uses schema differences
* once a migration is generated (and visible in the "drizzle" folder), navigate to [http://localhost:3000/dbmigrate](http://localhost:3000/dbmigrate) to run the migration
    * a successful migration will not produce any feedback on the webpage--make sure to check the db on planetscale to confirm that the migration was successful

## contributing
To commit to this project:
* You do not need to fork it; just clone it to your local computer.
* make sure you're on the main branch and it's up to date:
    * `git checkout main`
    * `git rebase origin/main`
* start a new branch: `git checkout -b [feature-name]`
* do your work, make your commits
* push your branch: `git push origin [feature-name]`
* make a PR against main on github
* ask for review

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
