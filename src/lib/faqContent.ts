export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqContent = {
  no: {
    subtitle: 'Finn svar på de mest vanlige spørsmålene om GumBox',
    contactSectionTitle: 'Fant du ikke svaret du lette etter?',
    contactSectionSubtitle: 'Ta kontakt med vår kundeservice, så hjelper vi deg gjerne!',
    contactButton: 'Kontakt kundeservice',
    data: [
      // Ordre og levering
      {
        category: "Ordre og levering",
        question: "Hvor lang tid tar det å få levert min første GumBox?",
        answer: "Din første GumBox sendes normalt innen 2-3 virkedager etter bestilling. Leveringstiden avhenger av din valgte leverandør. Du kan spore ordren din ved å gå til 'Spor ordre' nederst på siden, hvor du finner sporingslenker for alle våre leverandører:\n\n• Posten\n• PostNord  \n• Helthjem\n\nDu vil også motta en sporingslink på e-post når pakken er sendt."
      },
      {
        category: "Ordre og levering",
        question: "Kan jeg endre leveringsadressen min?",
        answer: "Ja, du kan endre leveringsadressen din når som helst før din neste levering. Kontakt vår kundeservice på post@gumbox.no minst 3 uker før neste leveringsdato."
      },
      {
        category: "Ordre og levering",
        question: "Hva skjer hvis jeg ikke er hjemme når pakken kommer?",
        answer: "Hvis du ikke er hjemme, vil leverandøren:\n\n• Levere pakken til nærmeste hentepunkt\n• Legge igjen en hentemelding\n• Gi deg informasjon om hvor pakken kan hentes\n\nPakken oppbevares normalt i 14 dager før den returneres til oss."
      },

      // Abonnement og fakturering
      {
        category: "Abonnement og fakturering",
        question: "Hvordan fungerer abonnementet?",
        answer: "GumBox er et månedlig abonnement hvor du får levert en kurert boks med tyggegummi hver måned. Du kan velge mellom:\n\n• Månedlig Plan (299 NOK) - kan avsluttes når som helst\n• 3 Måned Plan (249 NOK/måned) - forplikter til 3 måneder\n• 6 Måned Plan (229 NOK/måned) - forplikter til 6 måneder\n• 12 Måned Plan (199 NOK/måned) - forplikter til 12 måneder\n\nAlle priser faktureres månedlig. Lengre abonnementer gir betydelig rabatt per boks."
      },
      {
        category: "Abonnement og fakturering",
        question: "Kan jeg avbryte abonnementet mitt?",
        answer: "Avhenger av hvilken plan du har valgt:\n\n• Månedlig Plan: Kan avsluttes når som helst uten bindingstid\n• 3 Måned Plan: Forplikter til 3 måneder (bindingstid)\n• 6 Måned Plan: Forplikter til 6 måneder (bindingstid)\n• 12 Måned Plan: Forplikter til 12 måneder (bindingstid)\n\nFor planer med bindingstid kan du ikke avbryte før perioden er ferdig, men abonnementet fornyes ikke automatisk.\n\nFor å avbryte, kontakt oss på post@gumbox.no minst 3 uker før neste faktureringsperiode."
      },
      {
        category: "Abonnement og fakturering",
        question: "Når blir jeg fakturert?",
        answer: "Alle abonnementer faktureres månedlig, uavhengig av hvilken plan du velger:\n\n• Månedlig Plan: 299 NOK hver måned\n• 3 Måned Plan: 249 NOK hver måned (forplikter til 3 måneder)\n• 6 Måned Plan: 229 NOK hver måned (forplikter til 6 måneder)\n• 12 Måned Plan: 199 NOK hver måned (forplikter til 12 måneder)\n\nDu får en faktura på e-post før hver belastning. Total pluss fraktgebyr beregnes ved kassen."
      },
      {
        category: "Abonnement og fakturering",
        question: "Hvilke betalingsmåter aksepterer dere?",
        answer: "Vi aksepterer følgende betalingsmåter:\n\n• Visa og Mastercard\n• American Express\n• Klarna (del opp betalingen)\n• Vipps\n\nAlle betalinger er sikre og krypterte."
      },

      // Retur og reklamasjon
      {
        category: "Retur og reklamasjon",
        question: "Kan jeg returnere GumBox?",
        answer: "På grunn av hygieniske årsaker kan ikke tyggegummi returneres etter at pakken er åpnet. Dette er i henhold til norsk forbrukerlovgivning.\n\nDu har likevel angrerett i 14 dager fra mottak, men kun for uåpnede pakker i original emballasje.\n\nVi anbefaler at du prøver en måned først for å se om GumBox passer for deg."
      },
      {
        category: "Retur og reklamasjon",
        question: "Hva hvis jeg mottok feil eller skadet vare?",
        answer: "Hvis du har mottatt feil eller skadet vare, kontakt oss umiddelbart på post@gumbox.no med:\n\n• Ordrenummer\n• Foto av produktet/skaden\n• Beskrivelse av problemet\n\nVi sender da en erstatning kostnadsfritt, eller refunderer beløpet hvis det ikke er mulig å erstatte varen."
      },
      {
        category: "Retur og reklamasjon",
        question: "Hva hvis jeg ikke liker innholdet i boksen?",
        answer: "Vi kurerer tyggegummi fra hele verden og prøver å gi deg en variert opplevelse hver måned. Selv om vi ikke kan garantere at alle produkter vil passe din smak, jobber vi kontinuerlig med å forbedre vårt utvalg.\n\nVi setter pris på tilbakemeldinger på post@gumbox.no for å hjelpe oss å forbedre fremtidige bokser."
      },

      // Produkter og innhold
      {
        category: "Produkter og innhold",
        question: "Hvor mange produkter får jeg i hver boks?",
        answer: "Hver GumBox inneholder 8-12 forskjellige tyggegummi-produkter fra forskjellige merker og land. Boksen er kurert for å gi deg en variert opplevelse med både kjente og ukjente smaker."
      },
      {
        category: "Produkter og innhold",
        question: "Er tyggegummiene glutenfrie/veganske?",
        answer: "Mange av våre produkter er glutenfrie og veganske, men ikke alle. Vi jobber med å inkludere flere allergivennlige alternativer.\n\nHvis du har spesielle kostbehov eller allergier, vennligst kontakt oss på post@gumbox.no så kan vi gi deg informasjon om spesifikke produkter."
      },
      {
        category: "Produkter og innhold",
        question: "Kan jeg påvirke innholdet i boksen min?",
        answer: "For øyeblikket tilbyr vi ikke personaliserte bokser. Alle kunder får samme kurerte utvalg hver måned. Dette lar oss holde kostnadene nede og gi deg den beste prisen.\n\nVi vurderer å tilby personalisering i fremtiden basert på tilbakemeldinger fra våre kunder."
      },

      // Konto og personvern
      {
        category: "Konto og personvern",
        question: "Hvordan endrer jeg abonnementsinformasjonen min?",
        answer: "Du kan endre din abonnementsinformasjon ved å kontakte vår kundeservice på post@gumbox.no. Vi kan hjelpe deg med å oppdatere:\n\n• E-postadresse\n• Leveringsadresse\n• Betalingsinformasjon\n• Telefonnummer"
      },
      {
        category: "Konto og personvern",
        question: "Hvordan behandler dere mine personopplysninger?",
        answer: "Vi tar personvern svært alvorlig og følger GDPR-regelverket. Dine personopplysninger brukes kun til:\n\n• Behandling og levering av din bestilling\n• Kundeservice og kommunikasjon\n• Forbedring av våre tjenester\n\nVi selger aldri dine data til tredjeparter. Les vår komplette personvernerklæring for mer informasjon."
      }
    ]
  },
  en: {
    subtitle: 'Find answers to the most common questions about GumBox',
    contactSectionTitle: 'Didn\'t find the answer you were looking for?',
    contactSectionSubtitle: 'Contact our customer service, and we\'ll be happy to help!',
    contactButton: 'Contact customer service',
    data: [
      // Orders and delivery
      {
        category: "Orders and Delivery",
        question: "How long does it take to receive my first GumBox?",
        answer: "Your first GumBox is normally sent within 2-3 business days after ordering. Delivery time depends on your chosen carrier. You can track your order by going to 'Track Order' at the bottom of the page, where you'll find tracking links for all our carriers:\n\n• Posten\n• PostNord\n• Helthjem\n\nYou will also receive a tracking link by email when the package is shipped."
      },
      {
        category: "Orders and Delivery",
        question: "Can I change my delivery address?",
        answer: "Yes, you can change your delivery address anytime before your next delivery. Contact our customer service at post@gumbox.no at least 3 weeks before the next delivery date."
      },
      {
        category: "Orders and Delivery",
        question: "What happens if I'm not home when the package arrives?",
        answer: "If you're not home, the carrier will:\n\n• Deliver the package to the nearest pickup point\n• Leave a pickup notice\n• Give you information about where the package can be collected\n\nPackages are normally stored for 14 days before being returned to us."
      },

      // Subscription and billing
      {
        category: "Subscription and Billing",
        question: "How does the subscription work?",
        answer: "GumBox is a monthly subscription where you receive a curated box of chewing gum every month. You can choose between:\n\n• Monthly Plan (299 NOK) - can be cancelled anytime\n• 3 Month Plan (249 NOK/month) - commits to 3 months\n• 6 Month Plan (229 NOK/month) - commits to 6 months\n• 12 Month Plan (199 NOK/month) - commits to 12 months\n\nAll prices are billed monthly. Longer subscriptions provide significant discounts per box."
      },
      {
        category: "Subscription and Billing",
        question: "Can I cancel my subscription?",
        answer: "Depends on which plan you have chosen:\n\n• Monthly Plan: Can be cancelled anytime without commitment\n• 3 Month Plan: Commits to 3 months (binding period)\n• 6 Month Plan: Commits to 6 months (binding period)\n• 12 Month Plan: Commits to 12 months (binding period)\n\nFor plans with commitment periods, you cannot cancel before the period ends, but the subscription does not auto-renew.\n\nTo cancel, contact us at post@gumbox.no at least 3 weeks before the next billing period."
      },
      {
        category: "Subscription and Billing",
        question: "When will I be billed?",
        answer: "All subscriptions are billed monthly, regardless of which plan you choose:\n\n• Monthly Plan: 299 NOK each month\n• 3 Month Plan: 249 NOK each month (commits to 3 months)\n• 6 Month Plan: 229 NOK each month (commits to 6 months)\n• 12 Month Plan: 199 NOK each month (commits to 12 months)\n\nYou receive an invoice by email before each charge. Total plus shipping is calculated at checkout."
      },
      {
        category: "Subscription and Billing",
        question: "What payment methods do you accept?",
        answer: "We accept the following payment methods:\n\n• Visa and Mastercard\n• American Express\n• Klarna (split payments)\n• Vipps\n\nAll payments are secure and encrypted."
      },

      // Returns and complaints
      {
        category: "Returns and Complaints",
        question: "Can I return GumBox?",
        answer: "Due to hygienic reasons, chewing gum cannot be returned after the package has been opened. This is in accordance with Norwegian consumer legislation.\n\nYou still have a 14-day right of withdrawal from receipt, but only for unopened packages in original packaging.\n\nWe recommend trying one month first to see if GumBox is right for you."
      },
      {
        category: "Returns and Complaints",
        question: "What if I received wrong or damaged goods?",
        answer: "If you have received wrong or damaged goods, contact us immediately at post@gumbox.no with:\n\n• Order number\n• Photo of the product/damage\n• Description of the problem\n\nWe will then send a replacement free of charge, or refund the amount if it's not possible to replace the item."
      },
      {
        category: "Returns and Complaints",
        question: "What if I don't like the contents of the box?",
        answer: "We curate chewing gum from around the world and try to give you a varied experience each month. While we cannot guarantee that all products will suit your taste, we continuously work to improve our selection.\n\nWe appreciate feedback at post@gumbox.no to help us improve future boxes."
      },

      // Products and content
      {
        category: "Products and Content",
        question: "How many products do I get in each box?",
        answer: "Each GumBox contains 8-12 different chewing gum products from various brands and countries. The box is curated to give you a varied experience with both familiar and unfamiliar flavors."
      },
      {
        category: "Products and Content",
        question: "Are the chewing gums gluten-free/vegan?",
        answer: "Many of our products are gluten-free and vegan, but not all. We work to include more allergy-friendly alternatives.\n\nIf you have special dietary needs or allergies, please contact us at post@gumbox.no and we can provide information about specific products."
      },
      {
        category: "Products and Content",
        question: "Can I influence the contents of my box?",
        answer: "Currently, we do not offer personalized boxes. All customers receive the same curated selection each month. This allows us to keep costs down and give you the best price.\n\nWe are considering offering personalization in the future based on feedback from our customers."
      },

      // Account and privacy
      {
        category: "Account and Privacy",
        question: "How do I change my subscription information?",
        answer: "You can change your subscription information by contacting our customer service at post@gumbox.no. We can help you update:\n\n• Email address\n• Delivery address\n• Payment information\n• Phone number"
      },
      {
        category: "Account and Privacy",
        question: "How do you handle my personal information?",
        answer: "We take privacy very seriously and follow GDPR regulations. Your personal information is only used for:\n\n• Processing and delivering your order\n• Customer service and communication\n• Improving our services\n\nWe never sell your data to third parties. Read our complete privacy policy for more information."
      }
    ]
  }
};