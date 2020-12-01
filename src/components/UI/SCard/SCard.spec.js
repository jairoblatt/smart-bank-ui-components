import { shallowMount } from "@vue/test-utils";

// components
import { SCard } from "./index";

describe("Scard", () => {
  const mountFunction = (config) => shallowMount(SCard, { ...config });
  it("Must have loading bar when passing loading by prop ", () => {
    const wrapper = mountFunction({
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.vm.loading).toBeTruthy();
  });

  it("Must have class s-card-center  class when using center prop ", () => {
    const wrapper = mountFunction({
      propsData: {
        center: true,
      },
    });
    expect(wrapper.find("div").classes("s-card-center")).toBeTruthy();
  });

  it("Must have style height when using prop height", () => {
    const wrapper = mountFunction({
      propsData: {
        height: 500,
      },
    });
    expect(wrapper.element.style.height).toBe("500px");
  });
});
