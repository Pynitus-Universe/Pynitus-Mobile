export class MediaListItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

export class Artist {
  id: number;
  name: string;
}

export class Album {
  id: number;
  title: string;
  cover: string;
  artist: Artist;
}

export class Track {
  id: number;
  title: string;
  album: Album;
}
