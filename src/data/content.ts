export type ContentItem = { id: string; title: string; category: string; excerpt: string; image: string; date: string; slug: string; featured: boolean };
export const content: ContentItem[] = [
  { id:'anime-weekend', title:'Your next anime weekend starts here', category:'Anime Recommendations', excerpt:'A cozy watchlist for when you want a new world to sink into.', image:'/assets/content/anime-weekend.webp', date:'Coming soon', slug:'anime-weekend', featured:true },
  { id:'manga-corner', title:'The manga corner: stories worth finding', category:'Manga', excerpt:'Pages, panels, and the titles currently catching our eye.', image:'/assets/content/manga-corner.webp', date:'Coming soon', slug:'manga-corner', featured:false },
  { id:'games', title:'Small games with big feelings', category:'Games', excerpt:'Playful worlds and memorable little discoveries.', image:'/assets/content/games.webp', date:'Coming soon', slug:'small-games', featured:false },
  { id:'characters', title:'Characters we cannot stop thinking about', category:'Characters', excerpt:'A soft spot for great design and even better personalities.', image:'/assets/content/characters.webp', date:'Coming soon', slug:'characters', featured:false },
  { id:'trailers', title:'The trailer edit that made us pause', category:'Trailers & Visuals', excerpt:'A closer look at visual storytelling we love.', image:'/assets/content/trailers.webp', date:'Coming soon', slug:'trailer-edit', featured:false },
  { id:'culture', title:'Pop culture finds for curious fans', category:'Pop Culture', excerpt:'Things to read, save, share, and talk about.', image:'/assets/content/culture.webp', date:'Coming soon', slug:'pop-culture-finds', featured:false },
];
