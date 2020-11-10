// 创建虚拟dom
// createVnode

export function h(type, props, children) {
  return {
    type,
    props,
    children,
  };
}
