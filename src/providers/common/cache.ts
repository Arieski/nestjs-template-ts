import { createCache } from "cache-manager";

export namespace CACHE {
  export enum Type {
    SETTING = "SETTING"
  }

  export enum TTL {
    second = 1000,
    minute = 1000 * 60,
    hour = 1000 * 60 * 60,
    day = 1000 * 60 * 60 * 24,
    week = 1000 * 60 * 60 * 24 * 7
  }
}

export const cacheProviders = [
  {
    provide: CACHE.Type.SETTING,
    useFactory: async () => {
      return await createCache({ ttl: CACHE.TTL.second * 2 });
    }
  }
];
