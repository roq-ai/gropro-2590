import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { startupValidationSchema } from 'validationSchema/startups';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getStartups();
    case 'POST':
      return createStartup();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getStartups() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.startup
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'startup'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createStartup() {
    await startupValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.ad_analytics?.length > 0) {
      const create_ad_analytics = body.ad_analytics;
      body.ad_analytics = {
        create: create_ad_analytics,
      };
    } else {
      delete body.ad_analytics;
    }
    if (body?.business_advisor?.length > 0) {
      const create_business_advisor = body.business_advisor;
      body.business_advisor = {
        create: create_business_advisor,
      };
    } else {
      delete body.business_advisor;
    }
    if (body?.chatbot_creator?.length > 0) {
      const create_chatbot_creator = body.chatbot_creator;
      body.chatbot_creator = {
        create: create_chatbot_creator,
      };
    } else {
      delete body.chatbot_creator;
    }
    if (body?.crm?.length > 0) {
      const create_crm = body.crm;
      body.crm = {
        create: create_crm,
      };
    } else {
      delete body.crm;
    }
    if (body?.form_generator?.length > 0) {
      const create_form_generator = body.form_generator;
      body.form_generator = {
        create: create_form_generator,
      };
    } else {
      delete body.form_generator;
    }
    if (body?.lead_generator?.length > 0) {
      const create_lead_generator = body.lead_generator;
      body.lead_generator = {
        create: create_lead_generator,
      };
    } else {
      delete body.lead_generator;
    }
    if (body?.meeting_minutes?.length > 0) {
      const create_meeting_minutes = body.meeting_minutes;
      body.meeting_minutes = {
        create: create_meeting_minutes,
      };
    } else {
      delete body.meeting_minutes;
    }
    if (body?.note_taking?.length > 0) {
      const create_note_taking = body.note_taking;
      body.note_taking = {
        create: create_note_taking,
      };
    } else {
      delete body.note_taking;
    }
    if (body?.social_media_manager?.length > 0) {
      const create_social_media_manager = body.social_media_manager;
      body.social_media_manager = {
        create: create_social_media_manager,
      };
    } else {
      delete body.social_media_manager;
    }
    if (body?.website_developer?.length > 0) {
      const create_website_developer = body.website_developer;
      body.website_developer = {
        create: create_website_developer,
      };
    } else {
      delete body.website_developer;
    }
    const data = await prisma.startup.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
