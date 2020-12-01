import { shallowMount } from "@vue/test-utils";

// components
import { SCardSubTitle } from "../index";

describe("SCardSubTitle", () => {
  const mountFunction = (config) => shallowMount(SCardSubTitle, { ...config });

  it("should have content when using slots", () => {
    const wrapper = mountFunction({
      slots: {
        default: "Hello",
      },
    });
    expect(wrapper.html()).toContain("Hello");
  });
});
