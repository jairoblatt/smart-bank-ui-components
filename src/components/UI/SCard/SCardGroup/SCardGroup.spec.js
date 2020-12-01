import { shallowMount } from "@vue/test-utils";

// components
import { SCardGroup } from "../index";

describe("SCardGroup", () => {
  const mountFunction = (config) => shallowMount(SCardGroup, { ...config });

  it("should have content when using slots", () => {
    const wrapper = mountFunction({
      slots: {
        default: "Hello",
      },
    });
    expect(wrapper.html()).toContain("Hello");
  });
});
