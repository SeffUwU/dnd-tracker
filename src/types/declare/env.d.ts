declare namespace NodeJS {
  export interface ProcessEnv {
    // DB
    POSTGRES_DB: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_PORT: string;
    POSTGRES_HOST: string;
    // JWT
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
  }
}
