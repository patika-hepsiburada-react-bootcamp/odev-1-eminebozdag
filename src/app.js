import { getData } from "./lib/service.js";

(async () => {
  const [{ data: user }, { data: post }] = await getData(2);
  console.log("user: ", user, "post: ", post);
})();
