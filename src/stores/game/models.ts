export type Char = string;
export type Chars = Array<Char>;

export type Game = {
  id: string;
  chars: Chars;
  middle: Char;
  dictionary: string[];
  found: string[];
  date: string;
};

export interface GameState {
  games: Record<string, Game>;
}
