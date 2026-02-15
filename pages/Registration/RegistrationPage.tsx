import React, { useMemo, useState } from "react";

type TicketKey =
  | "student_early"
  | "student_early_epa"
  | "senior_academia_early"
  | "senior_academia_early_epa"
  | "senior_industry_early"
  | "senior_industry_early_epa"
  | "accompanying_person"
  | "conference_dinner";

type Ticket = {
  key: TicketKey;
  title: string;
  description?: string;
  priceEUR: number;
};

const TICKETS: Ticket[] = [
  {
    key: "student_early",
    title: "Students - early bird fee",
    description:
      "Fee for students (not including postdocs) valid for registrations made until March 31, 2026.",
    priceEUR: 450,
  },
  {
    key: "student_early_epa",
    title: "Students - early bird fee for EPA members",
    description:
      "Fee for students (not including postdocs) valid for EPA members for registrations made until March 31, 2026.",
    priceEUR: 430,
  },
  {
    key: "senior_academia_early",
    title: "Senior scientist from academia - early bird",
    description:
      "Fee for senior scientist from academia valid for registrations made until March 31, 2026.",
    priceEUR: 700,
  },
  {
    key: "senior_academia_early_epa",
    title: "Senior scientist from academia - early bird for EPA members",
    description:
      "Fee for senior scientist from academia valid for EPA members for registrations made until March 31, 2026.",
    priceEUR: 660,
  },
  {
    key: "senior_industry_early",
    title: "Senior scientist from industry - early bird",
    description:
      "Fee for senior scientist from industry valid for registrations made until March 31, 2026.",
    priceEUR: 850,
  },
  {
    key: "senior_industry_early_epa",
    title: "Senior scientist from industry - early bird for EPA members",
    description:
      "Fee for senior scientist from industry valid for EPA members for registrations made until March 31, 2026.",
    priceEUR: 810,
  },
  {
    key: "accompanying_person",
    title: "Accompanying person",
    priceEUR: 250,
  },
  {
    key: "conference_dinner",
    title: "Conference Dinner",
    priceEUR: 80,
  },
];

const formatEUR = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n);

const RegistrationPage: React.FC = () => {
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [infix, setInfix] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [foodOptions, setFoodOptions] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [accompanyingNames, setAccompanyingNames] = useState("");

  const [needSeparateInvoiceForAccompanying, setNeedSeparateInvoiceForAccompanying] =
    useState<boolean>(false);
  const [needInvoiceForBankTransfer, setNeedInvoiceForBankTransfer] =
    useState<boolean>(false);

  // VAT invoice data
  const [instName, setInstName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [instCity, setInstCity] = useState("");
  const [vatId, setVatId] = useState("");

  const [qty, setQty] = useState<Record<TicketKey, number>>({
    student_early: 0,
    student_early_epa: 0,
    senior_academia_early: 0,
    senior_academia_early_epa: 0,
    senior_industry_early: 0,
    senior_industry_early_epa: 0,
    accompanying_person: 0,
    conference_dinner: 0,
  });

  const subtotalEUR = useMemo(() => {
    return TICKETS.reduce((sum, t) => sum + (qty[t.key] || 0) * t.priceEUR, 0);
  }, [qty]);

  const requiredOk =
    firstName.trim() &&
    lastName.trim() &&
    country.trim() &&
    city.trim() &&
    email.trim() &&
    affiliation.trim();

  const changeQty = (key: TicketKey, delta: number) => {
    setQty((prev) => {
      const next = Math.max(0, (prev[key] || 0) + delta);
      return { ...prev, [key]: next };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!requiredOk) {
      alert("Faltan campos obligatorios (marcados con *).");
      return;
    }
    if (subtotalEUR <= 0) {
      alert("Selecciona al menos un ticket.");
      return;
    }

    // TODO: aquí luego conectamos con tu endpoint real (cuando lo definamos).
    // De momento, no tocamos backend.
    alert("Formulario OK (frontend). Subtotal: " + formatEUR(subtotalEUR));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="rounded-xl overflow-hidden border bg-white">
        <div className="bg-blue-600 text-white px-6 py-4 font-semibold">
          PhotoIUPAC 2026
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-10">
          {/* Personal data */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Personal registration data</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Salutation</label>
              <select
                className="w-full border rounded-full px-4 py-2"
                value={salutation}
                onChange={(e) => setSalutation(e.target.value)}
              >
                <option value="">— Select —</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mx">Mx</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name *
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Infix</label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={infix}
                  onChange={(e) => setInfix(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name *
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country *
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  placeholder="Country of residence"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  placeholder="City of residence"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone (mobile phone preferred)
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">
                Please write here if you have any food allergies, or other special
                food requirements.
              </p>
              <input
                className="w-full border rounded-full px-4 py-2"
                placeholder="Custom: Food options (text)"
                value={foodOptions}
                onChange={(e) => setFoodOptions(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Affiliation *
              </label>
              <input
                className="w-full border rounded-full px-4 py-2"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Accompanying person(s) name(s)
              </label>
              <input
                className="w-full border rounded-full px-4 py-2"
                value={accompanyingNames}
                onChange={(e) => setAccompanyingNames(e.target.value)}
              />
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="font-medium mb-2">
                  Please send me the separate invoice for the accompanying person(s)
                </div>
                <label className="mr-4">
                  <input
                    type="radio"
                    checked={needSeparateInvoiceForAccompanying === true}
                    onChange={() => setNeedSeparateInvoiceForAccompanying(true)}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    checked={needSeparateInvoiceForAccompanying === false}
                    onChange={() => setNeedSeparateInvoiceForAccompanying(false)}
                  />{" "}
                  No
                </label>
              </div>

              <div>
                <div className="font-medium mb-2">
                  Please send me the invoice for the bank transfer payments
                </div>
                <label className="mr-4">
                  <input
                    type="radio"
                    checked={needInvoiceForBankTransfer === true}
                    onChange={() => setNeedInvoiceForBankTransfer(true)}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    checked={needInvoiceForBankTransfer === false}
                    onChange={() => setNeedInvoiceForBankTransfer(false)}
                  />{" "}
                  No
                </label>
              </div>
            </div>
          </section>

          {/* Payment / VAT invoice */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">
              Payment data (this will be inserted into the VAT invoice)
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Institution exact name *
              </label>
              <input
                className="w-full border rounded-full px-4 py-2"
                value={instName}
                onChange={(e) => setInstName(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Street</label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Housenumber
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postal code
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  value={instCity}
                  onChange={(e) => setInstCity(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Institution's VAT or other similar tax number (VIES-VAT No. for EU)
              </label>
              <input
                className="w-full border rounded-full px-4 py-2"
                value={vatId}
                onChange={(e) => setVatId(e.target.value)}
              />
            </div>

            <p className="text-xs text-gray-600">
              The VAT invoice will be issued within 48 h upon the receipt of payment
              or official purchase order by the institution.
            </p>
          </section>

          {/* Tickets */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Select your Ticket</h2>

            <div className="space-y-3">
              {TICKETS.map((t) => (
                <div
                  key={t.key}
                  className="border rounded-xl p-4 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    {t.description ? (
                      <div className="text-xs text-gray-600 mt-1">{t.description}</div>
                    ) : null}
                    <div className="mt-2 text-sm font-semibold">
                      {formatEUR(t.priceEUR)}{" "}
                      <span className="text-xs text-gray-500 font-normal">
                        incl. VAT
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full border"
                      onClick={() => changeQty(t.key, -1)}
                      aria-label={`Decrease ${t.title}`}
                    >
                      -
                    </button>
                    <div className="w-8 text-center">{qty[t.key] || 0}</div>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full border"
                      onClick={() => changeQty(t.key, +1)}
                      aria-label={`Increase ${t.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-xl p-4 bg-gray-50 flex items-center justify-between">
              <div className="font-semibold">Order summary</div>
              <div className="font-semibold">{formatEUR(subtotalEUR)}</div>
            </div>
          </section>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-green-600 text-white disabled:opacity-50"
              disabled={!requiredOk}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
