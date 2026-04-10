export interface StageDefinition {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  story: string;
  category: 'challenge' | 'platform' | 'operations';
  description: string;
  bullets: string[];
  image: string; // filename in public/
  layout?: 'side' | 'stacked'; // 'side' (default): image left + panel right; 'stacked': full-width image + panel below
}
