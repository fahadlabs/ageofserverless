export type ToolTag = 'dns' | 'home' | 'email' | 'performance' | 'security';

export interface ITool {
  path: string;
  label: string;
  rate: 1 | 2 | 3 | 4 | 5;
  brief: string;
  description: string;
  tags: ToolTag[];
}
