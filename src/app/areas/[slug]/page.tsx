import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  return <div>{slug} AreaPage</div>;
}

export async function generateStaticParams() {
  const areas = ['seoul', 'busan'];
  return areas.map((area) => ({ slug: area }));
}
