import KKB from "./KKB";
import path from "path";

const app = new KKB({
  port: 9999,
  controllerDir: path.resolve(__dirname, "controllers/**/*"),
});

app.start();
