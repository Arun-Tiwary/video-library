export const imageURL = (id) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
export const videoURL = (id) => ``;
export const videoExsist = (videoList, id) =>
  videoList.some((value) => value === id);
