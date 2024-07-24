const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};
 
const fetchAPI = (date: Date) => {
  let result = [];
  let random = seededRandom(date.getTime());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return ["16:00", ...result];
};

const submitAPI = (formData: any) => {
  console.log("FormData: ", formData);
  return true;
};

export { fetchAPI, submitAPI };