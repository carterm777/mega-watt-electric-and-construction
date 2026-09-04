/*
 * Single source of truth for every word on the page.
 *
 * Everything under `copy` ships VERBATIM from the client brief. Connective
 * microcopy (form labels, button text, section eyebrows, alt text) is marked
 * with a `// microcopy` comment and is written to the brief's voice: direct,
 * owner-led, plainspoken, no unearned superlatives, no invented figures.
 */

export const business = {
  name: 'Mega Watt Electric and Construction',
  shortName: 'Mega Watt',
  city: 'Edmonton',
  region: 'Alberta',
  locationLabel: 'Edmonton, Canada',
  phoneDisplay: '(780) 233-2040',
  phoneHref: 'tel:+17802332040',
  smsHref: 'sms:+17802332040',
  email: 'mmwelectrical@gmail.com',
  emailHref: 'mailto:mmwelectrical@gmail.com',
  // Social profiles are unverified for this business, so all three point at the
  // real business site rather than an invented handle. See README.
  socialFallback: 'https://megawattpro.com/',
}

export const nav = {
  primary: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    {
      label: 'Services',
      href: '#services',
      items: [
        'Panel Upgrades',
        'Residential Wiring & Installations',
        'Interior & Exterior Lighting',
        'Farm & Agricultural Electrical',
        'Heat Tracing & De-Icing Systems',
        'Livestock Water Trough Heating',
        'Renovation Electrical (Kitchen, Bath & Basement)',
        'Deck & Fence Wiring',
        'Hot Tub & Spa Hookups',
        'Backup Generator Installation',
        'EV Charger Installation',
        'Electrical Panel & Service Swaps',
        'GFCI & Safety Upgrades',
        'Security & Motion Lighting',
        'Commercial Wiring',
      ],
    },
    {
      label: 'Service Areas',
      href: '#coverage',
      items: [
        'Edmonton',
        'St. Albert',
        'Sherwood Park',
        'Leduc',
        'Spruce Grove',
        'Stony Plain',
        'Fort Saskatchewan',
        'Beaumont',
        'Morinville',
        'Devon',
      ],
    },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#footer' },
    { label: 'Contact', href: '#cta' },
  ],
  // Compact set for the 390px strip — same anchors, shorter labels.
  mobile: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#footer' },
    { label: 'Contact', href: '#cta' },
  ],
}

export const hero = {
  eyebrow: 'Edmonton, Alberta — Owner-Operated Since Day One',
  headline: 'Licensed Master Electricians Serving Edmonton & Surrounding Areas',
  subheadline:
    'A certified Master Electrician leads every job, from a single panel swap to a full farm build, with materials chosen to outlast the invoice.',
  badges: [
    { label: '24/7 Availability', icon: 'Clock' },
    { label: 'Emergency Response', icon: 'Zap' },
    { label: 'Licensed & Insured', icon: 'ShieldCheck' },
    { label: 'Same-Day Estimates', icon: 'Timer' },
  ],
  primaryCta: 'Call (780) 233-2040',
  secondaryCta: 'View Our Services',
  // microcopy — the trust stat bar carries only figures the source site posts.
  stats: [
    { figure: '$1,450', label: 'Panel Upgrades, Starting' },
    { figure: '$550', label: 'Hot Tub & Spa Hookups, Starting' },
    { figure: '$100', label: 'Off If We Miss Your Same-Day Estimate' },
  ],
  image: {
    name: 'panel-upgrade-hero',
    alt: 'Gloved hands with a screwdriver working inside a densely wired new residential breaker panel',
    width: 1600,
    height: 900,
  },
}

// microcopy — the photo-diagnosis console. No backend; all state is local.
export const diagnosis = {
  eyebrow: 'Photo Diagnosis',
  heading: 'Send A Photo, Get A Real Answer',
  intro:
    'Photograph the panel, the outlet, or whatever is giving you trouble. A certified Master Electrician looks at it and calls you back.',
  dropTitle: 'Drop a photo here',
  dropHint: 'or browse your files — JPG, PNG, HEIC or WebP, up to 8 MB',
  browseLabel: 'Browse files',
  replaceLabel: 'Replace photo',
  removeLabel: 'Remove photo',
  openLabel: 'Start My Diagnosis',
  fields: {
    photo: 'Photo of the problem',
    description: 'What is it doing?',
    descriptionHint: 'Sparking, tripping, dead outlet, buzzing panel — plain words are fine.',
    name: 'Your name',
    phone: 'Phone number',
  },
  submitLabel: 'Send It To Matt',
  workingLabel: 'Reading your photo',
  reassurance: 'No cost, no obligation, we don’t share your info.',
  errors: {
    type: 'That file isn’t an image. Send a JPG, PNG, HEIC or WebP.',
    size: 'That photo is over 8 MB. Shoot it again at a smaller size, or send the closest shot you have.',
    missingPhoto: 'Add a photo first — that’s the part we actually diagnose from.',
    missingName: 'We need a name to ask for when we call back.',
    missingPhone: 'We need a number to call you back on.',
  },
  success: {
    title: 'Photo Received',
    body: 'A certified Master Electrician looks at it and calls you back on the number you gave us. If it’s sparking or the panel is dead, call now instead — that’s faster than any form.',
    note: 'Demo form — nothing is sent anywhere.',
    reset: 'Send another photo',
  },
}

export const reviews = {
  eyebrow: 'Google Reviews',
  heading: 'What Edmonton Says About The Crew',
  aggregateFigure: 4.9,
  aggregateLine: '4.9 out of 5 — based on 60+ Google reviews',
  aggregateSuffix: 'out of 5',
  aggregateSupport: 'based on 60+ Google reviews',
  ctaLead: 'Rather just talk to someone?', // microcopy
  placeholderNote:
    'Placeholder reviews. These are realistic stand-ins written for this demo — real Google Business Profile reviews replace all five before launch.',
  items: [
    {
      name: 'Dana K.',
      quote:
        'Called on a Sunday night when a breaker wouldn’t stop tripping and had someone out within a couple hours. Didn’t expect that on a weekend.',
    },
    {
      name: 'Rob T.',
      quote:
        'Panel was original to a 1970s build and clearly on its way out. New 200A panel went in clean, labelled properly, done in a day.',
    },
    {
      name: 'Priya S.',
      quote:
        'Gave me the number for the kitchen rewire up front and it didn’t move once the walls were open. Appreciated not getting surprised at the end.',
    },
    {
      name: 'Wade H.',
      quote:
        'Asked if they’d even bother driving out to our place past Leduc for a water trough heater. Matt talked me through it on the phone before anyone showed up, no runaround.',
    },
    {
      name: 'Lauren B.',
      quote:
        'Recessed lighting in the basement looks like it was part of the original build, not an add-on. Clean work.',
    },
  ],
}

export const trustBadges = {
  heading: 'Credentials Behind The Work',
  items: [
    { label: 'Certified Master Electrician', icon: 'Award' },
    { label: 'Journeyman-Certified Crew', icon: 'HardHat' },
    { label: 'Best in Edmonton Award', icon: 'Trophy' },
    { label: 'Locally Owned & Operated', icon: 'MapPin' },
  ],
}

export const whyUs = {
  eyebrow: 'Why The Crew',
  heading: 'Why Homeowners And Farms Call Us Back',
  items: [
    {
      title: 'One Electrician, Start To Finish',
      icon: 'UserCheck',
      body: 'Your project gets a certified Master Electrician, not a rotating crew of subcontractors. Matt’s on the job from the first estimate to the last outlet installed.',
      image: {
        name: 'explaining-panel',
        alt: 'Two people standing at an open breaker panel while one points out a circuit to the other',
        width: 1600,
        height: 900,
      },
    },
    {
      title: 'Priced Before We Start',
      icon: 'Receipt',
      body: 'We post real starting prices for panel upgrades and spa hookups instead of making you guess. You’ll know the number before any tools come out of the truck.',
      image: {
        name: 'written-quote',
        alt: 'A written quote form on a clipboard beside a pen, mug and desk lamp',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'We Answer When You Call',
      icon: 'PhoneCall',
      body: 'Electrical problems don’t wait for business hours, so neither do we. Round-the-clock coverage means a real person picks up, not a recording.',
      image: {
        name: 'van-paperwork',
        alt: 'An electrician sitting in the open back of a service van working on a laptop',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Built For Edmonton’s Weather And Land',
      icon: 'Snowflake',
      body: 'Heat tracing and de-icing systems are built into what we do, not a special order. If you’re on an acreage outside city limits, we already know the drill.',
      image: {
        name: 'generator-hero',
        alt: 'A standby generator and meter mounted on the side of a house in deep snow',
        width: 1600,
        height: 900,
      },
    },
  ],
}

export const services = {
  eyebrow: 'Core Services',
  heading: 'What We Take On',
  // microcopy — one short deck line per card, plus the feature card's label.
  featureLabel: 'The Work Most Electricians Turn Down',
  items: [
    {
      title: 'Panel Upgrades',
      body: 'Old fuse boxes and undersized panels get swapped for a system that can carry a modern home’s real load, starting at $1,450.',
      price: 'From $1,450',
      image: {
        name: 'panel-new',
        alt: 'A clean new breaker panel mounted on a white wall with its door open',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Residential Wiring & Installations',
      body: 'New circuits, rewires, and additions handled the way an inspector wants to see them, not just the way that’s fastest.',
      image: {
        name: 'rewire-rough-in',
        alt: 'Rough-in wiring and electrical boxes on a stud wall behind plastic sheeting',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Interior & Exterior Lighting',
      body: 'From recessed lighting to motion-activated security fixtures outside, wired and controlled the way you want to use them, not the way it was easiest to run the wire.',
      image: {
        name: 'exterior-lighting',
        alt: 'A stone-fronted bungalow at dusk with warm interior lighting and lit landscape fixtures',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Farm & Agricultural Electrical',
      feature: true,
      body: 'Heat tracing, livestock water trough heaters, and mast erections for properties outside city services — work most residential electricians turn down.',
      image: {
        name: 'trench-conduit',
        alt: 'An open trench with electrical conduit running across a lawn toward a house',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Renovation & Custom-Build Wiring',
      body: 'Kitchen, bathroom, and basement renovations, plus decks and fences, wired as part of the build instead of an afterthought once the drywall’s up.',
      image: {
        name: 'pot-light-install',
        alt: 'An electrician on a ladder fitting a pot light into a hallway ceiling',
        width: 1600,
        height: 1200,
      },
    },
    {
      title: 'Hot Tub & Spa Hookups',
      body: 'A dedicated, code-compliant circuit for a new spa or hot tub, starting at $550.',
      price: 'From $550',
      image: {
        name: 'hottub-night',
        alt: 'A steaming, lit hot tub on a deck at night',
        width: 1600,
        height: 1200,
      },
    },
  ],
}

export const coverage = {
  eyebrow: 'Service Area & Coverage',
  heading: 'Where We Drive',
  body: 'We’re based in Edmonton and cover the towns around it — St. Albert, Sherwood Park, and Leduc — along with the acreages and farm properties in between that a lot of electricians won’t drive out for. If a job’s inside our real coverage area, we treat it the same as one three blocks from the shop.',
  served:
    'Areas served: Edmonton, St. Albert, Sherwood Park, Leduc, and surrounding acreages and rural properties.',
  // microcopy — the filter interface around the hand-built schematic.
  filterLabel: 'Find your town',
  filterPlaceholder: 'Start typing — Leduc, Devon, Beaumont…',
  filterHint: 'Filters the index and lights the matching nodes on the schematic.',
  emptyState:
    'No match in the index. Call (780) 233-2040 and we’ll tell you straight whether you’re inside our coverage.',
  schematicNote: 'Coverage schematic — a diagram of our run list, not a map, and not to scale.',
  ctaLead: 'Not sure your address is on the list?',
  ctaButton: 'Call (780) 233-2040',
  hub: 'Edmonton',
  // x/y are schematic coordinates in a 0-100 field, arranged as a deliberate
  // abstract node diagram. They are NOT geographic positions.
  towns: [
    { name: 'Edmonton', kind: 'Base', x: 50, y: 50 },
    { name: 'St. Albert', kind: 'Core', x: 26, y: 22 },
    { name: 'Sherwood Park', kind: 'Core', x: 78, y: 34 },
    { name: 'Leduc', kind: 'Core', x: 60, y: 82 },
    { name: 'Spruce Grove', kind: 'Regular', x: 14, y: 48 },
    { name: 'Stony Plain', kind: 'Regular', x: 8, y: 68 },
    { name: 'Fort Saskatchewan', kind: 'Regular', x: 86, y: 12 },
    { name: 'Beaumont', kind: 'Regular', x: 78, y: 72 },
    { name: 'Morinville', kind: 'Regular', x: 40, y: 10 },
    { name: 'Devon', kind: 'Regular', x: 28, y: 88 },
    { name: 'Surrounding acreages & farm properties', kind: 'Rural', x: 86, y: 62 },
  ],
}

export const story = {
  eyebrow: 'Our Story',
  heading: 'Owner-Operated, Then And Now',
  // Section labels are microcopy; the three paragraphs are verbatim.
  blocks: [
    {
      label: 'How It Started',
      body: 'We started as one certified Master Electrician working out of Edmonton, taking on whatever the city needed — a swapped panel here, a rewired kitchen there. The work grew the way real trade work grows: one finished job leading to the next call.',
    },
    {
      label: 'Who Shows Up',
      body: 'What didn’t change is who shows up. We’re still owner-operated, which means the person who quotes your job is the same person a journeyman-certified crew answers to on-site. We use materials from the industry’s better manufacturers instead of whatever’s cheapest that week, because a panel or a run of wire has to work for years, not just pass an inspection once.',
    },
    {
      label: 'Where We Go',
      body: 'Edmonton’s growth pushed us into territory a lot of city electricians skip — acreages, farm operations, and properties past where city services end that still need heat tracing and a mast built for a prairie winter. We didn’t turn that work down, and it’s become as much a part of what we do as any kitchen rewire inside city limits. From a single flickering breaker to a full custom build, the goal’s the same: work that holds up long after we’ve left.',
    },
  ],
  image: {
    name: 'about-crew',
    alt: 'A five-person electrical crew standing in front of two white service vans in a shop bay',
    width: 1600,
    height: 900,
  },
}

export const finalCta = {
  eyebrow: 'Emergency & Same-Day',
  heading: 'Same-Day Estimates, Any Time You Call',
  support:
    'Call or text (780) 233-2040 — a certified Master Electrician answers, not a call center.',
  button: 'Call (780) 233-2040',
  textButton: 'Text (780) 233-2040', // microcopy
  image: {
    name: 'outage-night',
    alt: 'A snowy suburban street at night with a single house still lit',
    width: 1600,
    height: 900,
  },
}

export const faq = {
  eyebrow: 'Common Questions',
  heading: 'Questions We Get Asked Most',
  items: [
    {
      q: 'Do you offer 24-hour emergency electrical service?',
      a: 'Yes. We answer calls day and night, seven days a week, and a certified Master Electrician handles the dispatch decisions, not an answering service. If it’s a true emergency — sparking or a dead panel in the middle of winter — say so when you call and we’ll move it to the front of the line.',
    },
    {
      q: 'How much does a panel upgrade cost in Edmonton?',
      a: 'Panel upgrades start at $1,450, though the final number depends on your panel’s amperage and how much of the existing wiring needs to come along with it. We give you that number based on a look at the real panel, not a phone guess.',
    },
    {
      q: 'Do you work on farms and acreages outside Edmonton?',
      a: 'Yes — work on acreages and farm properties happens every week, from heat tracing systems to the water trough heaters that keep livestock supplied through a hard freeze. If you’re on a rural property past the edge of city services, that’s still inside our normal coverage.',
    },
    {
      q: 'Who’s going to show up and do the work — is it a licensed electrician?',
      a: 'The person who quotes your job and the person doing the work are usually the same crew — a certified Master Electrician and a journeyman-certified team, not a stranger you’re meeting for the first time on install day. You’ll know who’s coming before the truck’s in your driveway.',
    },
    {
      q: 'What areas do you serve around Edmonton?',
      a: 'We’re based in Edmonton and regularly work in St. Albert, Sherwood Park, and Leduc, along with the acreages and farm properties around all four. If you’re unsure whether your address is inside our coverage, call and we’ll tell you straight, not string you along.',
    },
    {
      q: 'How fast can I get an estimate?',
      a: 'Most estimates happen the same day you call, and there’s currently $100 off if we don’t make that same-day window. Bigger jobs — full renovations or a custom build — usually need a short site visit first so the number’s accurate, not padded.',
    },
  ],
}

export const footer = {
  mission:
    'We’re an owner-operated electrical and construction crew based in Edmonton, covering the city and the farms and acreages around it, day or night. From a single panel swap to a full custom build, a certified Master Electrician stands behind every job we take on.',
  servicesHeading: 'Our Services',
  services: [
    'Panel Upgrades',
    'Residential Wiring & Installations',
    'Farm & Agricultural Electrical',
    'Interior & Exterior Lighting',
    'Renovation & Custom-Build Wiring',
  ],
  linksHeading: 'Quick Links',
  links: [
    { label: 'Home', href: '#top' },
    { label: 'Our Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#cta' },
  ],
  contactHeading: 'Get In Touch',
  copyright: 'Mega Watt Electric and Construction. All rights reserved.',
}
