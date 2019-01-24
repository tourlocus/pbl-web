const endpoint = process.env.VUE_APP_ENDPOINT;

export function getConvertCreatePresent(payload) {
  const {articleIdList} = payload;

  const list = [];
  articleIdList.forEach( value => {
    list.push({
      label: value.title,
      value: value.id,
    });
  });

  return {
    articleIdList: list,
  };
}

export function getConverterEditPresent(payload) {
  const {articleIdList, present} = payload;

  const list = [];
  articleIdList.forEach(value => {
    list.push({
      label: value.title,
      value: value.id,
    });
  });

  const targetImage = `${endpoint}${present.file}`;
  return {
    articleIdList: list,
    present: {
      articleId: present.curent_article_id,
      file: targetImage,
      name: present.name,
      kind: present.kind,
      otherKind: present.other_kind,
      target: present.target,
      otherTarget: present.other_target,
      price: present.price,
      content: present.content,
    },
  };
}
