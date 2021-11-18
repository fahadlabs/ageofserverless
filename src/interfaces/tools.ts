import { IPath } from './paths';

export type ToolTag = 'dns' | 'home' | 'email' | 'performance' | 'security';

export interface ITool {
  path: IPath;
  label: string;
  rate: 1 | 2 | 3 | 4 | 5;
  brief: string;
  description: string;
  tags: ToolTag[];
  similar: IPath[];
}
