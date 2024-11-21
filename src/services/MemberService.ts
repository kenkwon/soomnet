import { MemberCount } from '@/types/Member';
import sekc10MissionArea from '../data/sekc10MissionArea.json';

export const getMembersCount = async (): Promise<MemberCount[]> => {
  // const response = await fetch('http://localhost:4137/soomnet/members');
  const response = await fetch('https://wingman.sekc.or.kr/soomnet/members');
  return response.json();
};

export const getMembersTotalCount = (members: MemberCount[]) => {
  return members.reduce((acc, cur) => acc + cur.count, 0);
};

/**
 * 해당 회원의 선교지역(target) 정보를 가져옵니다.
 */
export const getMissionAreaByMemberId = async (memberId: number) => {
  console.log(memberId);

  // const response = await fetch(`http://localhost:4137/soomnet/members/${memberId}/target`);
  return { id: 1, name: '영남합회', mapData: sekc10MissionArea };
};
