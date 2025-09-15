import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AlbumCard({ album }) {
  const artistName = album.artists?.[0]?.name || "Unknown Artist";
  const imageUrl = album.images?.[0]?.url;
  // Get the album's URL from the Spotify data
  const albumUrl = album.external_urls?.spotify || "#";

  return (
    // The entire card is wrapped in this anchor <a> tag
    <a href={albumUrl} target="_blank" rel="noopener noreferrer">
      <Card className="bg-zinc-900 border-zinc-800 text-white overflow-hidden hover:shadow-lg hover:shadow-green-500/20 transition-shadow">
        <CardHeader className="p-0">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={album.name}
              className="w-full h-auto aspect-square object-cover"
            />
          )}
        </CardHeader>
        <CardContent className="text-center p-4">
          <CardTitle className="truncate font-bold text-base">{album.name}</CardTitle>
          <p className="text-zinc-400 text-sm truncate">{artistName}</p>
        </CardContent>
      </Card>
    </a>
  );
}

export default AlbumCard;