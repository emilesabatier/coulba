DO $$ BEGIN
 CREATE TYPE "public"."account_sheet_flow" AS ENUM('debit', 'credit');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."account_scope" AS ENUM('company', 'association');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."account_type" AS ENUM('sheet', 'statement', 'special');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."computation_statement_operation" AS ENUM('plus', 'minus');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."organization_type" AS ENUM('company', 'association');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."sheet_side" AS ENUM('asset', 'liability');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account_sheets" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_account" varchar(256) NOT NULL,
	"id_sheet" varchar(256) NOT NULL,
	"flow" "account_sheet_flow",
	"is_allowance" boolean DEFAULT false,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "account_sheets_id_organization_id_year_id_account_id_sheet_unique" UNIQUE("id_organization","id_year","id_account","id_sheet")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account_statements" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_account" varchar(256) NOT NULL,
	"id_statement" varchar(256) NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "account_statements_id_organization_id_year_id_account_id_statement_unique" UNIQUE("id_organization","id_year","id_account","id_statement")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accounts" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_parent" varchar(256),
	"is_mandatory" boolean NOT NULL,
	"is_class" boolean NOT NULL,
	"is_selectable" boolean NOT NULL,
	"is_default" boolean NOT NULL,
	"number" integer NOT NULL,
	"label" text NOT NULL,
	"type" "account_type" NOT NULL,
	"scope" "account_scope" NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "accounts_id_organization_id_year_number_unique" UNIQUE("id_organization","id_year","number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "attachments" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"reference" text NOT NULL,
	"label" text,
	"date" timestamp(0) with time zone NOT NULL,
	"storage_key" text NOT NULL,
	"type" text NOT NULL,
	"size" integer NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "attachments_id_organization_id_year_reference_unique" UNIQUE("id_organization","id_year","reference")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "computation_statements" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_computation" varchar(256) NOT NULL,
	"id_statement" varchar(256) NOT NULL,
	"operation" "computation_statement_operation" NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "computation_statements_id_organization_id_year_id_computation_id_statement_unique" UNIQUE("id_organization","id_year","id_computation","id_statement")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "computations" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"number" integer NOT NULL,
	"label" text NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "computations_id_organization_id_year_number_unique" UNIQUE("id_organization","id_year","number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "journals" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"code" text NOT NULL,
	"label" text NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "journals_id_organization_code_unique" UNIQUE("id_organization","code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"scope" "organization_type" NOT NULL,
	"siren" text,
	"name" text,
	"email" text,
	"api_key_hash" text,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	CONSTRAINT "organizations_api_key_hash_unique" UNIQUE("api_key_hash")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "records" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_journal" varchar(256),
	"id_attachment" varchar(256),
	"id_automatic" varchar(256),
	"is_validated" boolean NOT NULL,
	"is_computed" boolean NOT NULL,
	"validated_on" timestamp(0) with time zone,
	"label" text NOT NULL,
	"date" timestamp(0) with time zone NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rows" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_record" varchar(256) NOT NULL,
	"id_account" varchar(256) NOT NULL,
	"label" text NOT NULL,
	"debit" numeric NOT NULL,
	"credit" numeric NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_user" varchar(256) NOT NULL,
	"expires_on" timestamp(0) with time zone NOT NULL,
	"is_active" boolean DEFAULT false NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sheets" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_parent" varchar(256),
	"is_default" boolean NOT NULL,
	"side" "sheet_side" NOT NULL,
	"number" integer NOT NULL,
	"label" text NOT NULL,
	"added_gross_amount" numeric NOT NULL,
	"added_allowance_amount" numeric NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "sheets_id_organization_id_year_side_number_unique" UNIQUE("id_organization","id_year","side","number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "statements" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_year" varchar(256) NOT NULL,
	"id_parent" varchar(256),
	"is_default" boolean NOT NULL,
	"number" integer NOT NULL,
	"label" text NOT NULL,
	"added_net_amount" numeric NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "statements_id_organization_id_year_id_parent_number_unique" UNIQUE("id_organization","id_year","id_parent","number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	"alias" text,
	"email" text NOT NULL,
	"is_email_validated" boolean NOT NULL,
	"email_to_validate" text,
	"email_token" text,
	"email_token_expires_on" timestamp(0) with time zone,
	"password_hash" text,
	"password_salt" text NOT NULL,
	"is_active" boolean NOT NULL,
	"invitation_token" text,
	"is_invitation_validated" boolean DEFAULT false NOT NULL,
	"invitation_token_expires_on" timestamp(0) with time zone,
	"invitation_last_sent_on" timestamp(0) with time zone,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "years" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"id_organization" varchar(256) NOT NULL,
	"id_previous_year" varchar(256),
	"is_selected" boolean NOT NULL,
	"is_minimal_system" boolean NOT NULL,
	"is_closed" boolean NOT NULL,
	"closed_on" timestamp(0) with time zone,
	"label" text NOT NULL,
	"starting_on" timestamp(0) with time zone NOT NULL,
	"ending_on" timestamp(0) with time zone NOT NULL,
	"last_updated_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"created_on" timestamp(0) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated_by" varchar(256),
	"created_by" varchar(256),
	CONSTRAINT "years_id_organization_id_previous_year_is_selected_unique" UNIQUE("id_organization","id_previous_year","is_selected")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_id_account_accounts_id_fk" FOREIGN KEY ("id_account") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_id_sheet_sheets_id_fk" FOREIGN KEY ("id_sheet") REFERENCES "public"."sheets"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_sheets" ADD CONSTRAINT "account_sheets_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_id_account_accounts_id_fk" FOREIGN KEY ("id_account") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_id_statement_statements_id_fk" FOREIGN KEY ("id_statement") REFERENCES "public"."statements"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account_statements" ADD CONSTRAINT "account_statements_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attachments" ADD CONSTRAINT "attachments_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attachments" ADD CONSTRAINT "attachments_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attachments" ADD CONSTRAINT "attachments_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attachments" ADD CONSTRAINT "attachments_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_id_computation_computations_id_fk" FOREIGN KEY ("id_computation") REFERENCES "public"."computations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_id_statement_statements_id_fk" FOREIGN KEY ("id_statement") REFERENCES "public"."statements"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computation_statements" ADD CONSTRAINT "computation_statements_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computations" ADD CONSTRAINT "computations_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computations" ADD CONSTRAINT "computations_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computations" ADD CONSTRAINT "computations_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "computations" ADD CONSTRAINT "computations_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "journals" ADD CONSTRAINT "journals_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "journals" ADD CONSTRAINT "journals_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "journals" ADD CONSTRAINT "journals_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations" ADD CONSTRAINT "organizations_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_id_journal_journals_id_fk" FOREIGN KEY ("id_journal") REFERENCES "public"."journals"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_id_attachment_attachments_id_fk" FOREIGN KEY ("id_attachment") REFERENCES "public"."attachments"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_id_record_records_id_fk" FOREIGN KEY ("id_record") REFERENCES "public"."records"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_id_account_accounts_id_fk" FOREIGN KEY ("id_account") REFERENCES "public"."accounts"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rows" ADD CONSTRAINT "rows_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sheets" ADD CONSTRAINT "sheets_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sheets" ADD CONSTRAINT "sheets_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sheets" ADD CONSTRAINT "sheets_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sheets" ADD CONSTRAINT "sheets_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statements" ADD CONSTRAINT "statements_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statements" ADD CONSTRAINT "statements_id_year_years_id_fk" FOREIGN KEY ("id_year") REFERENCES "public"."years"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statements" ADD CONSTRAINT "statements_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statements" ADD CONSTRAINT "statements_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "years" ADD CONSTRAINT "years_id_organization_organizations_id_fk" FOREIGN KEY ("id_organization") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "years" ADD CONSTRAINT "years_id_previous_year_years_id_fk" FOREIGN KEY ("id_previous_year") REFERENCES "public"."years"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "years" ADD CONSTRAINT "years_last_updated_by_users_id_fk" FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "years" ADD CONSTRAINT "years_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
