export type Char = string;
export type Chars = Array<Char>;

export type Game = {
  id: string;
  chars: Chars;
  middle: Char;
  dictionary: string[];
};

export type SavedGame = {
  id: string;
  player: string;
  found: string[];
};
