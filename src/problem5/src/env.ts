declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      HTTP_PORT: string;
      DATABASE: string;
      USER_NAME: string;
      PASSWORD: string;
      HOST: string;
    }
  }
}
export { };

