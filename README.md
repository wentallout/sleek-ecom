# Sleek Ecom

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Icons

Phosphor - Browse Collection: [https://icon-sets.iconify.design/ph]

## Auth

https://supabase.com/docs/guides/auth/server-side/migrating-to-ssr-from-auth-helpers?framework=sveltekit

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Vendure backend

- Step 1: Create a db named "vendure" in pgAdmin (postgreSQL)
- Step 2: `npx @vendure/create sleek-vendure`
- Step 3: setup the correct value for above command: localhost, port 5432, db username is `postgres` , password `1234`
