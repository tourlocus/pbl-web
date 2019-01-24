const uploadURL = 'http://localhost:3000/uploads';

// 記事編集
export function getConvertArticle(payload) {
  const {content, id, mediaFiles, tags, title} = payload;

  const media = [];
  // tslint:disable-next-line
  for (let i = 0; i < mediaFiles.length; i++) {
    const target = `${uploadURL}/${mediaFiles[i].url}`;
    media.push(target);
  }

  const tag = [];
  // tslint:disable-next-line
  for (let i = 0; i < tags.length; i++) {
    tag.push({text: tags[i].name});
  }

  return {
    id,
    title,
    tags: tag,
    media,
    content,
  };
}

// 記事詳細
export function getConvertDetailArticle(payload) {
  const {
    id,
    title,
    tags,
    content,
    status,
    mediaFiles,
    comment,
    userIcon,
    userName,
    created_at,
    updated_at,
  } = payload;

  const media = [];
  // tslint:disable-next-line
  for (let i = 0; i < mediaFiles.length; i++) {
    const target = `${uploadURL}/${mediaFiles[i].url}`;
    media.push(target);
  }

  const tag = [];
  // tslint:disable-next-line
  for (let i = 0; i < tags.length; i++) {
    const tagName = tags[i].name;
    tag.push(tagName);
  }

  const icon = `${uploadURL}/${userIcon}`;

  return {
    article: {
      id,
      title,
      content,
      tags: tag,
      media,
      status,
      userName,
      userIcon: icon,
      createdAt: created_at,
      updatedAt: updated_at,
    },
  };
}
