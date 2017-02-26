export class MediaListItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;

  constructor(id: number, title: string, subtitle: string, img: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.img = img;
  }
}

interface MediaListable {
  asMediaListItem(): MediaListItem;
}

export function asMediaListItems(items: MediaListable[]): MediaListItem[] {
  let list: MediaListItem[] = [];

  for(let item of items)
    list.push(item.asMediaListItem());

  return list;
}

export class APIArtist {
  id: number;
  type: string;
  follow: string;
  data: {
    name: string;
  };
}

export class Artist implements MediaListable {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  asMediaListItem() {
    return new MediaListItem(this.id, this.name,
      '? Albums, ? Tracks', 'covers/album-placeholder.png');
  }
}

export function artistFromApiItem(item: APIArtist): Artist {
  return new Artist(item.id, item.data.name);
}

export function artistsFromApiResponse(items: APIArtist[]): Artist[] {
  let artists: Artist[] = [];

  for(let item of items)
    artists.push(artistFromApiItem(item));

  return artists;
}

export class APIAlbum {
  id: number;
  type: string;
  follow: string;
  data: {
    title: string;
    artist: APIArtist;
  };
}

export class Album implements MediaListable {
  id: number;
  title: string;
  cover: string;
  artist: Artist;

  constructor(id: number, title: string, cover: string, artist: Artist) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.artist = artist;
  }

  asMediaListItem() {
    return new MediaListItem(this.id, this.title,
      this.artist.name, this.cover);
  }
}

export function albumFromApiItem(item: APIAlbum): Album {
  return new Album(item.id, item.data.title,
    'covers/album-placeholder.png', artistFromApiItem(item.data.artist));
}

export function albumsFromApiResponse(items: APIAlbum[]): Album[] {
  let albums: Album[] = [];

  for(let item of items)
    albums.push(albumFromApiItem(item));

  return albums;
}

export class APITrack {
  id: number;
  type: string;
  follow: string;
  data: {
    title: string;
    album: APIAlbum;
  };
}

export class Track implements MediaListable {
  id: number;
  title: string;
  album: Album;

  constructor(id: number, title: string, album: Album) {
    this.id = id;
    this.title = title;
    this.album = album;
  }

  asMediaListItem() {
    return new MediaListItem(this.id, this.title,
      this.album.title, this.album.cover);
  }
}

export function trackFromApiItem(item: APITrack): Track {
  return new Track(item.id, item.data.title,
    albumFromApiItem(item.data.album));
}

export function tracksFromApiResponse(items: APITrack[]): Track[] {
  let tracks: Track[] = [];

  for(let item of items)
    tracks.push(trackFromApiItem(item));

  return tracks;
}
