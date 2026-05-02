create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topics text[] not null default '{}',
  consent boolean not null default false,
  source text not null default 'newsletter_page',
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topic text not null,
  message text not null,
  source text not null default 'contact_page',
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists newsletter_signups_email_idx
  on public.newsletter_signups (email);

create index if not exists newsletter_signups_created_at_idx
  on public.newsletter_signups (created_at desc);

create index if not exists contact_messages_email_idx
  on public.contact_messages (email);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.newsletter_signups enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Block public newsletter reads" on public.newsletter_signups;
drop policy if exists "Block public contact reads" on public.contact_messages;

create policy "Block public newsletter reads"
  on public.newsletter_signups
  for select
  using (false);

create policy "Block public contact reads"
  on public.contact_messages
  for select
  using (false);
