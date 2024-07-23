const scrollTo = (element: string) => {
    const ele = document.querySelector(element);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
}

export {
  scrollTo
};