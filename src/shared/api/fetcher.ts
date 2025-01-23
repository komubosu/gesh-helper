import type { Fetcher } from 'swr';

interface SectorData {
  type: 'sector';
  value: {
    name_sector: string;
    lifts: { name: string; is_work: boolean }[];
  };
  id: string;
}

interface PubData {
  type: 'pab';
  value: {
    name: string;
    work_schedule: string;
    recommend: string;
    rage_receipt: string;
  };
  id: string;
}

interface ResponseData {
  temp: string;
  sector: SectorData[];
  pabs: PubData[];
}

interface ResponseDTO {
  temp: string;
  sector: SectorData[];
  pubs: PubData[];
}

function mapToResponseDTO(data: ResponseData): ResponseDTO {
  return {
    temp: data.temp,
    sector: data.sector,
    pubs: data.pabs,
  };
}

export const fetcher: Fetcher<ResponseDTO, string> = async url => {
  const response = await fetch(url);
  const data = await response.json();

  return mapToResponseDTO(data);
};
