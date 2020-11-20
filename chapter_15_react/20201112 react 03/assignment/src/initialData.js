export const initialData = [
  {
    nickname: "User 1",
    message:
      'Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth."',
  },
  {
    nickname: "User 2",
    message:
      "The single state tree does not conflict with modularity - in later chapters we will discuss how to split your state and mutations into sub modules.",
  },
  {
    nickname: "User 3",
    message:
      "Due to using a single state tree, all states of our application are contained inside one big object. However, as our application grows in scale, the store can get really bloated.",
  },
  {
    nickname: "User 4",
    message:
      "To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down.",
  },
];
