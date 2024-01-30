import Image from "next/image";
import Link from "next/link";

export default function Item({ items }) {
  console.log(items.authors);
  return (
    <>
      <div className="items-container">
        {items.map((item, index) => {
          return (
            <div className="book-contents" key={index}>
              <div className="img-container">
                <Image
                  src={item.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt=""
                  fill
                  className="img-item"
                />
              </div>
              <div className="item-list-info">
                <h2>{item.title}</h2>
                <div className="item-authors">
                  <span>著者名：</span>
                  <span>{item.authors.join("／")}</span>
                </div>
                <div className="item-published-date">
                  <span>出版日：</span>
                  <span>{item.publishedDate}</span>
                </div>
                <Link
                  href={item.link}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  リンク
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
