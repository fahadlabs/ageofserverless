/*eslint no-unused-vars: "off"*/
import { NextApiRequest, NextApiResponse } from 'next';

export interface IAPIFunction {
  (req: NextApiRequest, res: NextApiResponse): void | Promise<void>;
}
