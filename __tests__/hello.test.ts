// requireActual ensures you get the real file
// instead of an automock
// we use import type and <typeof ...> to still get types
import type * as Silly from "../pages/silly"
const { sillyFunction } = jest.requireActual<typeof Silly>("../pages/silly")

describe("silly function", () => {
  test("guaranteed random", () => {
    expect(sillyFunction()).toBe(4)
  })
})

// required with this small example
// to make the isolatedModules config happy
export {}