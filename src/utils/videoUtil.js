export const imageURL = (id) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
export const videoURL = (id) => ``;
export const videoExsist = (videoList, id) =>
  videoList.some((value) => value === id);

export const getFilterdVideo = (videoList, searchValue) => {
  return (
    searchValue !== "" &&
    videoList.filter(
      (video) =>
        video.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        video.author.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
};
