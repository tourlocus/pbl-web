const uploadURL = 'http://localhost:3000/uploads';

export function getConvertUserItem(payload) {
  const {
    articles,
    favorites,
    follow,
    follower,
    icon,
    intro,
    user_name,
  } = payload;

  const userIcon = `${uploadURL}/${icon}`;

  return {
    articles,
    favorites,
    follow,
    follower,
    icon: userIcon,
    intro,
    userName: user_name,
  };
}
