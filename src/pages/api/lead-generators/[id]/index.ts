import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { leadGeneratorValidationSchema } from 'validationSchema/lead-generators';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.lead_generator
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLeadGeneratorById();
    case 'PUT':
      return updateLeadGeneratorById();
    case 'DELETE':
      return deleteLeadGeneratorById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLeadGeneratorById() {
    const data = await prisma.lead_generator.findFirst(convertQueryToPrismaUtil(req.query, 'lead_generator'));
    return res.status(200).json(data);
  }

  async function updateLeadGeneratorById() {
    await leadGeneratorValidationSchema.validate(req.body);
    const data = await prisma.lead_generator.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLeadGeneratorById() {
    const data = await prisma.lead_generator.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
