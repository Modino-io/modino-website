import { Link } from "gatsby";
import React, { PropsWithChildren } from "react";

import * as styles from "./article-tile.component.module.scss";
import ArticleChipComponent from "../article-chip/article-chip.component";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

const ArticleTileComponent = ({
  title,
  date,
  summary,
  thumbnailPhotoUrl,
  slug,
  categories,
}: PropsWithChildren<{
  title: string;
  date: string;
  summary: string;
  thumbnailPhotoUrl: ImageDataLike;
  slug: string;
  categories: string;
}>) => {
  const image = getImage(thumbnailPhotoUrl)!;

  const getArticleChipColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "blog":
        return "red";
      case "case study":
        return "green";
      case "press":
        return "blue";
      default:
        return "red";
    }
  };

  return (
    <Link to={`/articles/${slug}`} className={styles.mArticleTile}>
      <GatsbyImage
        image={image}
        className={styles.mArticleTileImage}
        alt="article thumbnail photo"
      />
      <div className={styles.mArticleTileContent}>
        <div className={styles.mArticleTileChips}>
          {categories.split(", ").map((element) => (
            <ArticleChipComponent
              type={getArticleChipColor(element)}
              key={`${element}`}
            >
              {element}
            </ArticleChipComponent>
          ))}
        </div>
        <h3 className={styles.mArticleTileTitle}>{title}</h3>
        <i className={styles.mArticleTileDate}> {date} </i>
        <p className={styles.mArticleTileDescription}>{summary}</p>
      </div>
    </Link>
  );
};

export default ArticleTileComponent;
