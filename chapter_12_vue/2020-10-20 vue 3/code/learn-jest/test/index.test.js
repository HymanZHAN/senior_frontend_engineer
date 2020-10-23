// 可以去写 测试代码
const add = require("../add");

beforeEach(() => {
  console.log("before-each");
});

afterEach(() => {
  console.log("after-each");
});

// jest
describe("add", () => {
  test("1+1应该等于2 ", () => {
    // add(1, 1);
    // 匹配器
    // add(1,1) === 2
    // 1,1 -> 测试数据 -> given
    // add -> 测试动作 -> when
    // result === 2 -> 验证 -》 then
    // 匹配器
    expect(add(1, 1)).toBe(2);
  });

  test("string", () => {
    const string = "12345";

    expect(string).toContain("123");
  });
});
