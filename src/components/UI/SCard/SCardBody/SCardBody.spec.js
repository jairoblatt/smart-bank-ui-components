import { shallowMount } from "@vue/test-utils";

// components
import { SCardBody } from "../index";

describe("SCardBody", () => {
  const mountFunction = (config) => shallowMount(SCardBody, { ...config });

  it("should have content when using slots", () => {
    const wrapper = mountFunction({
      slots: {
        default: "Hello",
      },
    });
    expect(wrapper.html()).toContain("Hello");
  });
});
