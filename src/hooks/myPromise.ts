// An async function for testing our hook.
// it'll be successful 50% of the time.
export const myPromise = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞");
    }, 2000);
  });
};
