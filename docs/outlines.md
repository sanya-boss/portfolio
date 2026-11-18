# Outlines (hairline borders)

**Status: outlines are switched off, except** the featured video card, the FEATURED badge, the tool icon tiles (Tools I use → Show all) and the contact icon tiles ("Outlines kept on" rule right after the off block). Otherwise all are off by the "Outlines OFF" block at the end of
`design-system/components/components.css`. Delete that block to bring them back — nothing else was removed,
so every border below returns exactly as it was. Section dividers (`border-top`/`border-bottom` lines),
the experience timeline connector and the Plinko board's inner column divider were never part of the switch.

## Where outlines were (before switching off)

Dark theme, with the hierarchy from PR #34/#35:

| Element | Where | Outline before switch-off |
|---|---|---|
| Project cards `.am-proj` | Home → Selected work | yes |
| Featured video card (SARLE, `data-feat`) | Home, under hero | yes |
| "NEW" badge on featured video | Home | yes |
| Plinko card + its icon tile + board | Home, bottom | yes |
| About photos frame | About, top | yes |
| Dock / language switcher + active pill | All pages (left on desktop, bottom on mobile) | yes |
| `FEATURED` badge `.am-badge--outline` | SARLE card, Snape OÜ in Story so far | yes |
| Experience logos `.am-exp__logo` | Home → Story so far, CV | yes |
| Tools list icon tiles (Show all) | Home → Tools I use | yes |
| Accordions `.am-acc`, form fields `.am-field`/`.am-inline`, timeline GIF preview `.am-tlgif` | where used | yes |
| Secondary buttons `.am-btn` (About me, Email, Visit site, Show all, See projects) | all pages | **no** (removed in PR #34; light theme kept it) |
| Inline tool tags & language tags `.am-tag` | Home → Tools I use, Basics | **no** (PR #34) |
| "Tallinn" highlight `.am-hl` | Home hero | **no** (PR #34) |
| Chips `.am-chip`: "now → Techno TLN", About asides ("really hard", …) | Home → Basics, About | **no** (PR #35) |
| Tool pills `.am-stack__i`, contact icon tiles `.am-row__thumb`, inner project media frame | Home | **no** (PR #34) |

Light theme kept outlines on buttons, tags and chips.
