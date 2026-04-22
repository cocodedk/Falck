# Research: Falck Virksomhedsberedskabet — preparing for interview 2026-04-28

Compiled from public Danish sources (April 2026). Purpose: ground the oplæg
om ressourcedatabasen in real facts about the organisation, not assumptions.

## Interview context

- **Role:** Ansvarlig for Digitalisering og AI i Virksomhedsberedskabet
- **Date / place:** Tuesday 2026-04-28 kl. 10.00, Sydhavnsgade 18, 2450 København SV
- **Attendees:** Maja Broløs (Direktør, VB) + Kim Holst (Program Manager)
- **Duration:** 45 min
- **Application deadline was:** 16. april 2026 (closed)
- **Prep question from Maja:**
  > "Virksomhedsberedskabets ressourcedatabase skal bygges i et felt, hvor
  > betalte konsulenter, pro bono-bidragende medlemsvirksomheder og et operativt
  > team har forskelligt ejerskab, ansvar, behov og forventninger. Hvordan
  > designer og bygger du en løsning, der kan rumme det uden at gå på kompromis
  > med kvalitet, driftssikkerhed og brugbarhed i en krisesituation?"

## What Virksomhedsberedskabet (VB) is

- Non-profit initiative launched by Falck late 2024
- Network of Danish private companies on standby to lend equipment, supplies
  and expertise to authorities during national crises
- Goal: 500+ member companies; path to self-sustaining independent org
- Supplements public beredskab (does not replace it)
- Membership is explicitly non-binding — members can decline any specific
  activation request
- Initial use case focus: plejehjem / hospice / vulnerable citizens who
  cannot self-prepare for 3-day emergency periods (per official guidance)
- Canonical activation pattern (from press): nursing home loses power →
  generator (Arkil) + diesel (OK) + local electricians, coordinated

## Funding

- 15.000 DKK / year per member company
- 2,3 mio. DKK grant from Industriens Fond for 2025–2026
- Planned trajectory: self-sustaining via membership base

## People

### Operational team (interview)
- **Maja Broløs** — Direktør
- **Kim Holst** — Program Manager (named in launch press)

### Falck leadership
- **Jakob Riis** — CEO Falck, initiator

### Advisory board (rådgivende udvalg)
- Mia Wagner — investor
- Jesper Arkil — Arkil Holding A/S
- Jakob Ellemann-Jensen — Dansk Erhverv (former Minister)
- **Laila Reenberg** — Direktør, Center for Cyber- og Informationssikkerhed (CFCS)
- Morten Høyer — Dansk Industri
- **Charlotte Wetche** — Netcompany (Defense and Resilience), Brigadegeneral (P)
- Jakob Riis — Falck

Two cyber/defence heavyweights on the advisory board means data classification,
clearance and supply-chain security expectations are real, not ceremonial.

### Named member companies (press)
Salling Group, OK, Arkil A/S, Securitas, plus involvement from Dansk Erhverv
and Dansk Industri as org backers.

## The ressourcedatabase — what it actually is

From Falck's own public pages and press materials:

- "Drifts- og ressourcedatabase med information om medlemsvirksomheders
  drift og kompetencer"
- **VB has exclusive access.** Members can only see their own information.
- Authorities request activation *through* VB, not directly from members.
- Resources mapped against crisis scenarios using **police district (politikreds)
  geographic structure** — geographic routing is a first-class concept.
- Contents (per DI / Ritzau press):
  - Equipment: generators, vehicles
  - Supplies: fuel, food, drinking water, medicine
  - Expertise: forsyning, transport/logistik, cybersikkerhed, fødevarer,
    energi, medicin

## The role (from LinkedIn posting)

- Build VB's **digitale fundament fra bunden**: system setup, integrations,
  crisis management system as central operational element
- Translate operational needs into practical solutions
- Make technical concepts understandable for non-technical stakeholders
- Requirements:
  - Solid experience in digitalization, systemudvikling, AI — can code
  - Practical GenAI experience
  - Cybersikkerhed understanding (beyond theory)
  - **Able to obtain security clearance** — signals sensitive / classified-
    adjacent data
  - Danish fluency
  - "Struktureret uden at være rigid, analytisk uden at miste overblikket"
- Team: small, startup-like, inside an independent non-profit

## Open questions / uncertainty

- Search result suggested Cecilie Wagner currently holds the title
  "Ansvarlig for Digitalisering og AI i Virksomhedsberedskabet". LinkedIn
  profile blocked, could not verify. Possibilities: (a) already in role and
  they want a second / replacement, (b) adjacent role with similar name,
  (c) stale search. Worth asking Maja directly at the interview.

## Reframing of Maja's question given the research

The three stakeholder types from her question, mapped to reality:

- **Betalte konsulenter** — likely external consultants paid to visit member
  companies, interview them, map capabilities, normalise taxonomies. Their
  job is data quality and enrichment, not access.
- **Pro bono-bidragende medlemsvirksomheder** — pay 15k/year membership, but
  contribute *resources and time* pro bono during activation. Autonomy is
  non-negotiable (non-binding membership).
- **Operativt team** — VB staff (Maja, Kim, digital lead, ops), small, must
  activate on minutes' notice in a real crisis.

The database is not a list. It is a **matching system**:
`crisis scenario → required resource profile → activatable companies in geography → contact path`.

Three design tensions this creates:
1. Member autonomy + operational speed — members choose, op team needs seconds
2. Data quality + data drift — 500+ members × rolling changes, consultants
   can't outpace drift; need member self-service with trust tiers
3. Sensitivity / clearance + usability — classified-adjacent data rules out
   consumer SaaS shortcuts; must still be usable by a tired ops lead at 02:00

## Sources

- https://www.falck.dk/om-falck/nyheder-og-presse/virksomhedsberedskab/virksomhedsberedskab/
- https://www.falck.dk/om-falck/nyheder-og-presse/virksomhedsberedskab/virksomhedsberedskab/hvad-er-virksomhedsberedskabet/
- https://www.falck.dk/om-falck/nyheder-og-presse/virksomhedsberedskab/virksomhedsberedskab/hvordan-arbejder-vi/
- https://www.falck.dk/om-falck/nyheder-og-presse/virksomhedsberedskab/virksomhedsberedskab/det-raadgivende-udvalg/
- https://www.falck.dk/om-falck/nyheder-og-presse/virksomhedsberedskab/virksomhedsberedskab/bliv-medlem/
- https://industriensfond.dk/projekt/virksomhedsberedskabet/
- https://via.ritzau.dk/pressemeddelelse/14158630/erhvervslivets-ressourcer-skal-styrke-det-danske-beredskab
- https://via.ritzau.dk/pressemeddelelse/14251870/radgivende-udvalg-skal-saette-kursen-for-virksomhedsberedskabet-og-aktivere-erhvervslivets-ressourcer
- https://www.danskindustri.dk/di-business/arkiv/nyheder/2024/12/virksomheders-muskelkraft-sattes-ind-i-dansk-beredskab/
- https://www.danskerhverv.dk/presse-og-nyheder/nyheder/2024/december/virksomhedsberedskabet-erhvervslivets-ressourcer-skal-styrke-det-danske-beredskab/
- https://danskekommuner.dk/artikler/nyheder/2024/december/03/danske-beredskaber-om-nyt-virksomhedsberedskab-vi-skal-have-alle-gode-kraefter-i-spil
- https://dk.linkedin.com/jobs/view/ansvarlig-for-digitalisering-og-ai-i-virksomhedsberedskabet-at-falck-4385919301
