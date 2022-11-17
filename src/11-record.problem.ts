//⭐️
import { expect, it } from "vitest";
type value = string
interface cacheType {
    id?:value,
}
const createCache = () => {
  const cache:cacheType = {};

  const add = (id: string, value: string) => {
    cache.id= value;
  };

  const remove = (id: string) => {
    delete cache.id;
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
