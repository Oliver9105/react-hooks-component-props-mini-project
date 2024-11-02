import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emoji = "☕️";
  let emojiCount = Math.ceil(minutes / 5);

  if (minutes >= 30) {
    emoji = "🍱";
    emojiCount = Math.ceil(minutes / 10);
  }

  const minutesToRead = `${emoji.repeat(emojiCount)} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minutesToRead}</p>
    </article>
  );
}

export default Article;
