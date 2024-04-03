import { Lucia, TimeSpan } from "lucia";
import { d as dev } from "./index4.js";
import { LibSQLAdapter } from "@lucia-auth/adapter-sqlite";
import { createClient } from "@libsql/client";
const TURSO_DATABASE_URL = "libsql://bm-invest-markoskace1.turso.io";
const TURSO_AUTH_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTE4MzQ3MDQsImlkIjoiNzFmNmQ1M2MtNmZmZS00OTg4LThiYTEtOGVjZTIyMDNhMjc3In0.AWdH1DsWiYj6GK70-4FCZefGtpXUjwFIaDu8fOBao9bS-2Nsm5RVAPY4gygaUFB8HzV2fBzfxMRdpblpFbN5AQ";
const db = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN
});
const adapter = new LibSQLAdapter(db, {
  user: "user",
  session: "session"
});
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: !dev
    }
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username
    };
  },
  sessionExpiresIn: new TimeSpan(2, "w")
});
export {
  db as d,
  lucia as l
};
