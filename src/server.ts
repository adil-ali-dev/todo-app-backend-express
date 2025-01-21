import app from "./app";
import { APP_ENV, APP_NAME, APP_PORT } from "./config/app.config";

app.listen(APP_PORT, () => {
    console.log(`${APP_NAME} is running on http://localhost:${APP_PORT} in ${APP_ENV} mode!`);
});
