import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { chatbotCreatorValidationSchema } from 'validationSchema/chatbot-creators';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.chatbot_creator
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getChatbotCreatorById();
    case 'PUT':
      return updateChatbotCreatorById();
    case 'DELETE':
      return deleteChatbotCreatorById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getChatbotCreatorById() {
    const data = await prisma.chatbot_creator.findFirst(convertQueryToPrismaUtil(req.query, 'chatbot_creator'));
    return res.status(200).json(data);
  }

  async function updateChatbotCreatorById() {
    await chatbotCreatorValidationSchema.validate(req.body);
    const data = await prisma.chatbot_creator.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteChatbotCreatorById() {
    const data = await prisma.chatbot_creator.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
