export type Category = "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas";

export type Lang = "cs" | "de" | "en" | "es" | "fr" | "pt";

export type Flags = {
  nsfw: boolean,
  religious: boolean,
  political: boolean,
  racist: boolean,
  sexist: boolean,
  explicit: boolean
}

export type FlagKeys = "nsfw" | "religious" | "political" | "racist" | "sexist" | "explicit";

export type Joke = {
  id: number;
  category: Category;
  flags: Flags;
  setup?: string;
  delivery?: string;
  joke?: string;
  safe: boolean;
  lang: Lang;
  type: "single" | "twopart";
}