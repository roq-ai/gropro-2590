-- CreateTable
CREATE TABLE "ad_analytics" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ad_analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_advisor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_advisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatbot_creator" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chatbot_creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_generator" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_generator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lead_generator" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_generator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meeting_minutes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meeting_minutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "note_taking" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "note_taking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_media_manager" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_media_manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "startup" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "roq_user_id" VARCHAR(255) NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "website_developer" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "startup_id" UUID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "website_developer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "ad_analytics" ADD CONSTRAINT "ad_analytics_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_advisor" ADD CONSTRAINT "business_advisor_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chatbot_creator" ADD CONSTRAINT "chatbot_creator_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "crm" ADD CONSTRAINT "crm_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_generator" ADD CONSTRAINT "form_generator_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lead_generator" ADD CONSTRAINT "lead_generator_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "meeting_minutes" ADD CONSTRAINT "meeting_minutes_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "note_taking" ADD CONSTRAINT "note_taking_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "social_media_manager" ADD CONSTRAINT "social_media_manager_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "startup" ADD CONSTRAINT "startup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "website_developer" ADD CONSTRAINT "website_developer_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

