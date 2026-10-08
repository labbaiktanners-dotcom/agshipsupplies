import { describe, expect, it } from "vitest";

import { CONTACT, PORTS, PRIMARY_SERVICES } from "@/lib/site-content";

describe("business website requirements", () => {
  it("keeps the requested port priority order", () => {
    expect(PORTS).toEqual(["Fujairah", "Khorfakkan", "Jebel Ali", "Khalifa", "RAK Mina Saqr", "Sharjah"]);
  });

  it("keeps the three primary business lines", () => {
    expect(PRIMARY_SERVICES).toEqual(["provisions", "bonded", "crew"]);
  });

  it("uses the supplied public contact details", () => {
    expect(CONTACT.phoneDisplay).toBe("+971 50 988 3935");
    expect(CONTACT.email).toBe("sales@agshipsupplies.com");
    expect(CONTACT.wechat).toBe("HajiDubai");
  });
});