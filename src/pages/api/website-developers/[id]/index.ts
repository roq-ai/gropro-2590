import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { websiteDeveloperValidationSchema } from 'validationSchema/website-developers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.website_developer
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getWebsiteDeveloperById();
    case 'PUT':
      return updateWebsiteDeveloperById();
    case 'DELETE':
      return deleteWebsiteDeveloperById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWebsiteDeveloperById() {
    const data = await prisma.website_developer.findFirst(convertQueryToPrismaUtil(req.query, 'website_developer'));
    return res.status(200).json(data);
  }

  async function updateWebsiteDeveloperById() {
    await websiteDeveloperValidationSchema.validate(req.body);
    const data = await prisma.website_developer.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteWebsiteDeveloperById() {
    const data = await prisma.website_developer.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
