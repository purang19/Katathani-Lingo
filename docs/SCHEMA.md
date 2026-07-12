# Content schema

## The one decision everything else follows from

**Roles hold the lessons. Properties hold the variables. Departments are just an assignment.**

Your org chart says a bellboy at The Sands and a bellboy at The Little Shore are two different
things. For English, they are not. They carry the same bags, say the same sentences, and make
the same mistakes. What differs is the name of the restaurant they point at.

So the content is written once per **role**, and each **property** supplies a short list of
facts. The lesson text says:

```
"I would recommend {{outlet.signature}}, {{outlet.signature.pitch}}."
```

A Sands waiter sees *Talay, right on the beach, with live music and a fresh seafood display*.
A Little Shore waiter sees theirs. Same file. One edit changes both, correctly.

## The numbers

| | Mirror the org chart | Roles + properties |
|---|---|---|
| Manuals to write | ~24 | ~15 unique roles + 1 core |
| Questions to maintain | ~1,200 | ~500 |
| Edits to change the apology standard | 20+ | **1** |
| Cost of adding a third hotel | Rewrite everything | Write one file of facts |

The last row is the one that matters. Katathani has five properties.

## Files

```
content/
  catalogue.json               who learns what — the org chart, and nothing else
  properties/
    sands.json                 facts only. No lessons.
    little-shore.json
  roles/
    core/
      core-service-standard.json    magic words, sensitive words, apology.
                                    EVERY guest-facing role inherits this.
    fb-restaurant-service.json
    fo-bellboy.json
    hk-room-attendant.json
    ...
```

A role declares `"inherits": ["core-service-standard"]`. A staff member's curriculum is the
inherited core units followed by the role's own. Nothing is ever copied.

## Why the core matters more than the roles

Every guest-facing person at both hotels — all twenty of them — needs the same three things:

- **Magic words.** *Certainly.* *May I.* *It is my pleasure.*
- **Sensitive words.** *It is the rule.* *You must.* *Not my department.* *I don't know.*
- **The apology.** Sorry → own it → say what you will do → do it.

A gardener saying *"it is the rule"* to a guest is the same failure as a waiter saying it.
Put that in one file and every role gets it. Put it in twenty files and it will be wrong in
nineteen of them within a year.

Your Magic Word and Sensitive Word documents are the highest-value content in the whole
collection, and this is where they live.

## The staff record

```json
{
  "staffId": "S1042",
  "pin": "hashed",
  "propertyId": "sands",
  "roleId": "fb-restaurant-service",
  "name": "..."
}
```

Staff ID and a 4-digit PIN, not email — most of them do not have a work email address, and
asking for one will kill adoption on day one.

`propertyId` + `roleId` is all the engine needs: it resolves the curriculum from the role,
and the variables from the property.

## Not every department belongs in this app

**Guest-facing** (the app as built): Front Office, F&B, Housekeeping, Spa, Customer Relations,
Retail, Tour Counter. These all need the same core and differ only in situation.

**Kitchen** is different. Kitchen staff barely speak to guests. Their English need is
*internal* — allergen names, chef instructions, HACCP terms, reading a delivery note. Same
engine, entirely different content, and the guest-facing core does not apply. Worth doing.
Second.

**IT and HR** should probably not be in this app at all. Their English need is email and
systems, not service. Building lessons for them will cost you time and neither department
will open it. I would cut them from v1 and see if anyone complains.

**Reservations and Customer Relations** may be cluster-level rather than per-property — one
team serving all Katathani hotels. If so, they are not assigned to a property, and the
`{{tokens}}` need to resolve per *enquiry* rather than per staff member. That changes the
design, so I need to know before we build.

## Open questions — I need your answers before we build

1. **Resort Host (Little Shore) vs Guest Service Agent (Sands)** — same job, different title?
   I have modelled them as the same role with a display-name override. Confirm or correct.

2. **Shop (Little Shore, under F&B) vs Melon Minimart (Sands, under Retail)** — same job,
   different reporting line? I have assumed yes, which is exactly what the schema is designed
   to absorb.

3. **Reservations and Customer Relations** — per-property, or shared across the Katathani
   Collection?

4. **The Waters, The Leaf Oceanside, Seaview** — do they come next, or are we only ever doing
   these two? It does not change the design (that is the point), but it changes what I put in
   the seed data.

5. **Kitchen** — in or out of v1?

6. **Do you have the other three manuals** (Vocabulary, Magic Word, Sensitive Word) as files?
   The Magic Word and Sensitive Word documents are what fill `core-service-standard.json`, and
   that file is worth more than any single role.
