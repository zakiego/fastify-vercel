# Fastify Vercel Starter

Starter untuk menjalankan web framework [Fastify](https://www.fastify.io/) pada serverless [Vercel](https://vercel.com/).

## Demo

- <https://fastify-js.vercel.app>
- <https://fastify-js.vercel.app/hi>

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/zakiego/fastify-vercel&project-name=fastify-vercel&repository-name=fastify-vercel)

## How to use

1. Clone repository

```bash
git clone https://github.com/zakiego/fastify-vercel

cd fastify-vercel
```

2. Install [Vercel CLI](https://vercel.com/docs/clihttps://vercel.com/docs/cli)

```bash
yarn global add vercel

or

npm i -g vercel
```

3. Install package.json

```bash
yarn install
```

4. Menjalankan di local

```bash
yarn dev
```

5. Deploy ke vercel

```bash
yarn deploy
```

6. Deploy ke Vercel versi [production](https://vercel.com/docs/cli#introduction/unique-options/prod)

```bash
yarn deploy:prod
```

## Reference

- <https://vercel.com/docs/project-configuration>
- <https://vercel.com/docs/runtimes#official-runtimes/node-js>
- <https://vercel.com/docs/cli>
- <https://www.fastify.io/docs/latest/Guides/Serverless/>
