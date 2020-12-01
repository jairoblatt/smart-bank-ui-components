import { shallowMount } from "@vue/test-utils";

// components
import { SCardText } from "../index";

describe("SCardText", () => {
  const mountFunction = (config) => shallowMount(SCardText, { ...config });

  it("should have content when using slots", () => {
    const wrapper = mountFunction({
      slots: {
        default: "Hello",
      },
    });
    expect(wrapper.html()).toContain("Hello");
  });
});
