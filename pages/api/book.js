export async function getBooksByKeyword(keyword) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
  );
  const data = await res.json();
  const items = data.items.map((item) => {
    const info = item.volumeInfo;
    return {
      title: info.title,
      authors: info.authors ? info.authors : [],
      img: info.imageLinks ? info.imageLinks.thumbnail : "",
      publishedDate: info.publishedDate,
      link: info.infoLink,
    };
  });

  return items;
}
