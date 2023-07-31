import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { formGeneratorValidationSchema } from 'validationSchema/form-generators';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.form_generator
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getFormGeneratorById();
    case 'PUT':
      return updateFormGeneratorById();
    case 'DELETE':
      return deleteFormGeneratorById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFormGeneratorById() {
    const data = await prisma.form_generator.findFirst(convertQueryToPrismaUtil(req.query, 'form_generator'));
    return res.status(200).json(data);
  }

  async function updateFormGeneratorById() {
    await formGeneratorValidationSchema.validate(req.body);
    const data = await prisma.form_generator.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteFormGeneratorById() {
    const data = await prisma.form_generator.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
