import { MapSVGData } from '@/types/Map';
import Link from 'next/link';
import SVGPath from './SVGPath';

type OwnProps = {
  data: MapSVGData[];
};

const MapSVG: React.FC<OwnProps> = async ({ data }) => {
  return (
    <svg
      height={576}
      width={425}
      strokeMiterlimit="10"
      style={{ fillRule: 'nonzero', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', cursor: 'pointer' }}
      version="1.1"
      viewBox="91.8524 73.4119 593.469 803"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <g>
        {data.map(({ conf, id, name, d }) => (
          <Link href={`/areas/${conf}/${id}`} key={id}>
            <SVGPath id={id} name={name} d={d} key={id} />
          </Link>
        ))}
      </g>
    </svg>
  );
};

export default MapSVG;
