import { AxiosInstance } from "axios";
import ziggyRoute, { Config as ZiggyConfig } from "ziggy-js";

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  var request: any[] | unknown[];
  var route: typeof ziggyRoute;
  var Ziggy: ZiggyConfig;
}
