import { getData } from "./lib/service.js";

//this function catches and shows the data returned from getdata
(async () => {
  const [{ data: user }, { data: post }] = await getData(2);
  console.log("user: ", user, "post: ", post);
})();
