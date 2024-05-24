import {fastifyEnv, FastifyEnvOptions} from "@fastify/env"
import type { FastifyInstance } from "fastify";

const schema: FastifyEnvOptions["schema"] = {
  type: 'object',
  required: [ 'PORT' ],
  properties: {
    PORT: {
      type: 'number',
      default: 3000
    }
  }
}

const envOptions: FastifyEnvOptions = {
    schema,
    dotenv: {
        path: `${__dirname}/.env`,
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
      };
    }
  }

