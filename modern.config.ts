import appTool,{ defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/app/config
export default defineConfig({
  runtime: {
  },
  plugins:[appTool()],dev:{port:3000}
});
