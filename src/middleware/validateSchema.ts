import { TExtendedNextApiHandler } from '@ts/common';
import { NextApiRequest, NextApiResponse } from 'next';
import { number, object } from 'yup';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function validateSchema(schema: OptionalObjectSchema<ObjectShape>, handler: TExtendedNextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (['POST', 'PUT'].includes(req.method as string)) {
      try {
        const newSchema =
          req.method === 'POST' ? schema : schema.concat(object({ id: number().required().positive() }));
        req.body = await newSchema.camelCase().validate(req.body);
      } catch (error) {
        res.status(400).json({
          error: true,
          message: `Invalid Input! => ${error}`,
          data: [],
        });
      }
    }
    await handler(req, res);
  };
}
