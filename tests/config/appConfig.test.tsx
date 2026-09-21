import { describe, expect, it } from "vitest";
import { isAdditiveAppId } from "@/config/appConfig";

describe("appConfig provider lifecycle", () => {
  it.each(["pi"])("classifies %s as additive", (appId) => {
    expect(isAdditiveAppId(appId)).toBe(true);
  });

  // OpenCode / OpenClaw / Hermes 自 v3.20.3-relay.2 起改为本地路由转发：
  // CC Switch 不再改写它们的配置文件，供应商改以「当前供应商」参与代理选路，
  // 因此 UI 按切换模式（isCurrent）而非增量模式（isInConfig）判断状态。
  it.each([
    "claude",
    "claude-desktop",
    "codex",
    "gemini",
    "grokbuild",
    "opencode",
    "openclaw",
    "hermes",
  ])("does not classify %s as additive", (appId) => {
    expect(isAdditiveAppId(appId)).toBe(false);
  });
});
