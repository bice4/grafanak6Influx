import http from "k6/http";
import { sleep } from "k6";

const BASE_URL = "<ENTER_YOUR_URL_HERE>";

export const options = {
  vus: 10,
  duration: "30s",
};
export default function () {

//Description: This is a sample script to test the load on the application

  sleep(1);
}
