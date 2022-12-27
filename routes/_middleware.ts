import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 407,
  site: "deco-portfolio",
  domains: ["deco-portfolio.deco.site"],
});