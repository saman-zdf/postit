import "@testing-library/jest-dom/extend-expect";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
  unobserve: () => null,
});

// eslint-disable-next-line
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
