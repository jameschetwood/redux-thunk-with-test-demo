import { add } from "./actions";

test("add2", async () => {
  const mockFetchJson = jest.fn(() => ({ results: ["tom", "jim"] }));
  global.fetch = jest.fn(() => ({ json: mockFetchJson }));

  const dispatch = jest.fn();

  await add()(dispatch);

  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0]).toEqual([
    {
      type: "ADD",
      people: ["tom", "jim"]
    }
  ]);
});
