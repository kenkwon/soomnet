import { Post } from '@/types/Post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    `https://wingman.sekc.or.kr/posts?type=wait&searchKeyword=&pointerId=9007199254740991&pageSize=1000`
  );
  return response.json();
};
