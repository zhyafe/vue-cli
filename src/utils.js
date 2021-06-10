import Mock from "mockjs";

let listData = () => {
  return Mock.mock({
    "list|10": [{ id: "@id", title: "@ctitle" }],
  });
};

let data = {
  getList: () => listData().list,
};

export default data;
