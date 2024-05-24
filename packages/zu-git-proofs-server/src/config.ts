import {fastifyEnv, FastifyEnvOptions} from "@fastify/env"
import type { FastifyInstance } from "fastify";

const schema: FastifyEnvOptions["schema"] = {
  type: 'object',
  required: [ 'SERVER_PRIVATE_KEY', 'GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000
    },
    SERVER_PRIVATE_KEY: {
      type: 'string'
    },
    GITHUB_CLIENT_ID: {
      type: 'string'
    },
    GITHUB_CLIENT_SECRET: {
      type: 'string'
    }
  }
}

const envOptions: FastifyEnvOptions = {
    schema,
    dotenv: {
        path: `${__dirname}/../.env`,
        debug: true
    },
    env: true
}

export async function registerEnvPlugin(server: FastifyInstance): Promise<void> {
    await server.register(fastifyEnv, envOptions)
}

declare module 'fastify' {
    interface FastifyInstance {
      config: {
        PORT: number,
        GITHUB_CLIENT_ID: string,
        GITHUB_CLIENT_SECRET: string,
        SERVER_PRIVATE_KEY: string
      };
    }
  }

