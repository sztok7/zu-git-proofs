import type { FastifyInstance } from "fastify";

import sqlitePlugin from "fastify-sqlite-typed"

export async function initDb(server: FastifyInstance) {
    await  server.register(sqlitePlugin.default, {
        dbFilename: server.config.DB_FILE
    })
    await server.db.run("CREATE TABLE IF NOT EXISTS zupass_badges ( \
        zupass_email TEXT PRIMARY KEY, \
        badge TEXT NOT NULL \
      )");
}

export async function getZupassBadge(db: FastifyInstance["db"], zupassEmail: string): Promise<{badge: string}|undefined>{
    return db.get("SELECT badge from zupass_badges WHERE zupass_email=?", [zupassEmail]) 
}

export async function storeZupassBadge(db: FastifyInstance["db"], zupassEmail: string, badge: string): Promise<void>{
    await db.run("INSERT INTO zupass_badges(zupass_email, badge) VALUES(?, ?)", [zupassEmail, badge]) 
}