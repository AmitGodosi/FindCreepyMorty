export type Character = {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: CharacterCommonData;
  image?: string;
  url?: string;
  created?: string;
  location?: CharacterCommonData;
  episode?: string[];
};

type CharacterCommonData = {
  name: string;
  url: string;
};