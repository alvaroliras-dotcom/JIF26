import React, { useMemo, useState } from "react";

const formatEUR = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n);

type Category = "" | "senior" | "student";
type Membership = "" | "non_member" | "grufo_member";
type FeePeriod = "" | "before_june_30" | "after_june_30";

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

  // NEW FIELD: Gala Dinner Attendance
  const [galaDinnerAttendance, setGalaDinnerAttendance] = useState<
    "" | "yes" | "no"
  >("");

  const [
    needSeparateInvoiceForAccompanying,
    setNeedSeparateInvoiceForAccompanying,
  ] = useState<boolean>(false);

  const [needInvoiceForBankTransfer, setNeedInvoiceForBankTransfer] =
    useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // VAT invoice data
  const [instName, setInstName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [instCity, setInstCity] = useState("");
  const [vatId, setVatId] = useState("");

  // Ticket logic (REAL pricing table)
  const [category, setCategory] = useState<Category>("");
  const [membership, setMembership] = useState<Membership>("");
  const [feePeriod, setFeePeriod] = useState<FeePeriod>("");

  const subtotalEUR = useMemo(() => {
    if (!category || !membership || !feePeriod) return 0;

    const isGrufo = membership === "grufo_member";

    // BEFORE JUNE 30TH, 2026
    if (feePeriod === "before_june_30") {
      if (category === "senior") return isGrufo ? 400 : 480;
      if (category === "student") return isGrufo ? 200 : 280;
    }

    // AFTER JUNE 30TH, 2026
    if (feePeriod === "after_june_30") {
      if (category === "senior") return isGrufo ? 480 : 550;
      if (category === "student") return isGrufo ? 280 : 350;
    }

    return 0;
  }, [category, membership, feePeriod]);

  const requiredOk =
    firstName.trim() &&
    lastName.trim() &&
    country.trim() &&
    city.trim() &&
    email.trim() &&
    affiliation.trim() &&
    category.trim() &&
    membership.trim() &&
    feePeriod.trim();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requiredOk) {
      alert("Faltan campos obligatorios (marcados con *).");
      return;
    }

    if (subtotalEUR <= 0) {
      alert("Selecciona un ticket válido.");
      return;
    }

    const payload = {
      salutation,
      firstName,
      infix,
      lastName,
      country,
      city,
      phone,
      email,

      // NEW FIELD
      galaDinnerAttendance,

      foodOptions,
      affiliation,
      accompanyingNames,
      needSeparateInvoiceForAccompanying,
      needInvoiceForBankTransfer,
      invoice: {
        instName,
        street,
        houseNumber,
        postalCode,
        instCity,
        vatId,
      },
      ticket: {
        category,
        membership, // non_member | grufo_member
        feePeriod, // before_june_30 | after_june_30
        subtotalEUR,
      },
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const msg = await res.json().catch(() => ({}));
        throw new Error(msg?.error || "Request failed");
      }

      alert("Enviado ✅ Revisa tu Gmail.");
    } catch (err: any) {
      alert(`Error enviando el correo: ${err?.message || "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="rounded-xl overflow-hidden border bg-white">
        <div className="bg-blue-600 text-white px-6 py-4 font-semibold">
          IX JIF 2026
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-10">
          {/* Personal data */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Personal registration data</h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Salutation
              </label>
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
                <label className="block text-sm font-medium mb-1">
                  City *
                </label>
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
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  className="w-full border rounded-full px-4 py-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* NEW QUESTION: Gala Dinner Attendance */}
            <div className="space-y-2 text-sm">
              <div className="font-medium">
                Conference Gala Dinner Attendance
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="galaDinnerAttendance"
                    checked={galaDinnerAttendance === "yes"}
                    onChange={() => setGalaDinnerAttendance("yes")}
                  />
                  YES
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="galaDinnerAttendance"
                    checked={galaDinnerAttendance === "no"}
                    onChange={() => setGalaDinnerAttendance("no")}
                  />
                  NO
                </label>
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
                  Please send me the separate invoice for the accompanying
                  person(s)
                </div>
                <label className="mr-4">
                  <input
                    type="radio"
                    checked={needSeparateInvoiceForAccompanying === true}
                    onChange={() =>
                      setNeedSeparateInvoiceForAccompanying(true)
                    }
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    checked={needSeparateInvoiceForAccompanying === false}
                    onChange={() =>
                      setNeedSeparateInvoiceForAccompanying(false)
                    }
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
                Institution's VAT or other similar tax number (VIES-VAT No. for
                EU)
              </label>
              <input
                className="w-full border rounded-full px-4 py-2"
                value={vatId}
                onChange={(e) => setVatId(e.target.value)}
              />
            </div>

            <p className="text-xs text-gray-600">
              The VAT invoice will be issued within 48 h upon the receipt of
              payment or official purchase order by the institution.
            </p>
          </section>

          {/* Tickets */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Select your Ticket</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category *
                </label>
                <select
                  className="w-full border rounded-full px-4 py-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                >
                  <option value="">— Select —</option>
                  <option value="senior">Senior researcher</option>
                  <option value="student">Student</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Membership *
                </label>
                <select
                  className="w-full border rounded-full px-4 py-2"
                  value={membership}
                  onChange={(e) => setMembership(e.target.value as Membership)}
                >
                  <option value="">— Select —</option>
                  <option value="non_member">Non-member</option>
                  <option value="grufo_member">GRUFO member</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Fee period *
              </label>
              <select
                className="w-full border rounded-full px-4 py-2"
                value={feePeriod}
                onChange={(e) => setFeePeriod(e.target.value as FeePeriod)}
              >
                <option value="">— Select —</option>
                <option value="before_june_30">Before June 30th, 2026</option>
                <option value="after_june_30">After June 30th, 2026</option>
              </select>
            </div>

            <div className="border rounded-xl p-4 bg-gray-50 flex items-center justify-between">
              <div className="font-semibold">Order summary</div>
              <div className="font-semibold">{formatEUR(subtotalEUR)}</div>
            </div>

            <p className="text-xs text-gray-600">
              Prices are calculated automatically based on Category, Membership
              and Fee period.
            </p>
          </section>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-green-600 text-white disabled:opacity-50"
              disabled={!requiredOk || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
