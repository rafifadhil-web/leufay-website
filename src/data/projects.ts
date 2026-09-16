export type Project = { name:string; category:string; status:string; description:string; image:string; href:string };
export const projects: Project[] = [
  { name:'Leufay Link Shoppe', category:'Product discovery', status:'In development', description:'A curated product discovery platform connecting anime and pop-culture audiences with products they may love.', image:'/assets/projects/link-shoppe.webp', href:'/shop/' },
  { name:'THE MVP', category:'Digital concept', status:'Exploring', description:'A productivity RPG and virtual companion concept that gives real-life progress a game-inspired spark.', image:'/assets/projects/the-mvp.webp', href:'/projects/' },
  { name:'Leufay Production', category:'Creative media', status:'Live', description:'The growing digital home for the Leufay world, its stories, and its community.', image:'/assets/projects/leufay-production.webp', href:'/about/' },
  { name:'Future projects', category:'Experiment', status:'Coming soon', description:'New ideas, digital products, and playful experiences we are currently exploring.', image:'/assets/projects/future.webp', href:'/contact/' },
];
