import { shallowMount } from "@vue/test-utils";

// components
import { SCardTitle } from "../index";

describe("SCardTitle", () => {
  const mountFunction = (config) => shallowMount(SCardTitle, { ...config });

  it("should have content when using slots", () => {
    const wrapper = mountFunction({
      slots: {
        default: "Hello",
      },
    });
    expect(wrapper.html()).toContain("Hello");
  });
});
