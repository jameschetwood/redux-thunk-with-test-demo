import { add } from "./actions";

describe("add", () => {
  afterEach(jest.clearAllMocks);

  const mockFetchJson = jest.fn(() => ({ results: ["tom", "jim"] }));
  global.fetch = jest.fn(() => ({ json: mockFetchJson }));

  const dispatch = jest.fn();

  test("first", async () => {
    await add()(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: "ADD",
        people: ["tom", "jim"]
      }
    ]);
  });

  test("second", async () => {
    // Will only be [] as clearAllMocks has been run
    expect(dispatch.mock.calls.length).toBe(0);
  });
});
