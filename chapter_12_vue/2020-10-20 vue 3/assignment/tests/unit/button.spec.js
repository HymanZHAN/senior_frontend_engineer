// 暗号：兰博会喷火

import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";

describe("Button.vue", () => {
  it("renders slot content correctly", () => {
    const btnWrapper = mount(Button, {
      slots: {
        default: `<div id="btn-content">Default Button</div>`
      }
    });

    expect(btnWrapper.get("#btn-content").text()).toBe("Default Button");
  });

  it("emits 'test-click' custom event", () => {
    const btnWrapper = mount(Button);

    btnWrapper.get("button").trigger("click");

    expect(btnWrapper.emitted()["test-click"]).toBeTruthy();
  });

  it("does not emit event when props.disabled=true is passed", () => {
    const btnWrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    });

    btnWrapper.get("button").trigger("click");

    expect(btnWrapper.emitted()["test-click"]).toBeUndefined();
  });
});
