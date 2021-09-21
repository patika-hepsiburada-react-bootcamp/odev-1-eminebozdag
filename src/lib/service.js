import axios from "axios";

const getData = async (userId) => {
  try {
    return Promise.all([
      await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      ),
    ]);
  } catch (e) {
    console.log("status: error");
  }
};

export { getData };
