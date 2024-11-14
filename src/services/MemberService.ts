import { MemberCount } from '@/types/Member';

export const getMembersCount = async (): Promise<MemberCount[]> => {
  // const response = await fetch('http://wingman.sekc.or.kr/external/members');
  const response = await fetch('http://wingman.sekc.or.kr/soomnet/members');
  return response.json();
};
