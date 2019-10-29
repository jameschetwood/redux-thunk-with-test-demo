import { add } from "./actions";

test("add2", async () => {
  global.fetch = jest.fn(() => {
    return {
      json: jest.fn(() => {
        return {
          results: ["bobby"]
        };
      })
    };
  });

  const dispatch = jest.fn();

  await add()(dispatch);

  console.log(dispatch.mock.calls);
});
