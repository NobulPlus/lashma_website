export const truncateContent = (content, wordLimit = 200) => {
    const words = content.split(/\s+/);
    if (words.length <= wordLimit) return content;
    return words.slice(0, wordLimit).join(" ") + "...";
  };