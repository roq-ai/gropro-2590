import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { noteTakingValidationSchema } from 'validationSchema/note-takings';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.note_taking
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getNoteTakingById();
    case 'PUT':
      return updateNoteTakingById();
    case 'DELETE':
      return deleteNoteTakingById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getNoteTakingById() {
    const data = await prisma.note_taking.findFirst(convertQueryToPrismaUtil(req.query, 'note_taking'));
    return res.status(200).json(data);
  }

  async function updateNoteTakingById() {
    await noteTakingValidationSchema.validate(req.body);
    const data = await prisma.note_taking.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteNoteTakingById() {
    const data = await prisma.note_taking.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
