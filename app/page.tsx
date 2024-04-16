/* eslint-disable react/no-unescaped-entities */
"use client";

import { PDFViewer } from "@react-pdf/renderer";
import Contract from "@/components/Contract";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import namesData from "@/utils/datas.json";
import { fr } from "date-fns/locale";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [adeli, setAdeli] = useState<string>("");
  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[] | undefined>(initialDays);
  const [periode, setPeriode] = useState<Date[] | undefined>(initialDays);

  const names = namesData;

  const handleNameChange = (selectedName: string) => {
    setName(selectedName);
  };

  const compareDates = (a: Date, b: Date): number => {
    return a.getTime() - b.getTime();
  };

  // Tri des dates par ordre chronologique
  const sortedDates =
    days && days.length > 0 ? [...days].sort(compareDates) : [];

  const sortedPeriode =
    periode && periode.length > 0 ? [...periode].sort(compareDates) : [];

  const formattedPeriode = sortedPeriode.map((date) =>
    new Date(date).toLocaleDateString("fr-FR")
  );

  // Formatage des dates
  const formattedDates = sortedDates.map((date) =>
    new Date(date).toLocaleDateString("fr-FR")
  );

  const resetDays = () => {
    setDays([]);
  };
  const resetPeriode = () => {
    setPeriode([]);
  };

  return (
    <main className="flex max-w-screen-2xl  mx-auto flex-col items-center justify-between p-24">
      <div className="flex gap-4   w-full h-screen">
        <PDFViewer className=" w-1/2">
          <Contract
            name={name}
            adeli="0102"
            date={formattedDates.join(", ")}
            periode={formattedPeriode.join(" au ")}
          />
        </PDFViewer>

        <div className="w-1/2">
          <div className="flex gap-4 items-center  m-2">
            <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
              1
            </p>
            <h3 className="font-bold text-lg">Selectionne l'infirmier-e</h3>
          </div>
          <select
            className="m-4 border p-2 rounded-md"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
          >
            <option value="">Nom Prénom</option>
            {names.map((name, index) => (
              <option key={index} value={name.name}>
                {name.name}
              </option>
            ))}
          </select>
          <div className="flex gap-4 items-center  m-2">
            <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
              2
            </p>
            <h3 className="font-bold text-lg">Selectionne la période</h3>
          </div>
          <DayPicker
            mode="multiple"
            max={2}
            selected={periode}
            locale={fr}
            onSelect={setPeriode}
          />
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={resetPeriode}
          >
            Réinitialiser
          </button>
          {periode && periode.length > 0 ? (
            <p>Période selectionnée ➡️ {formattedPeriode.join(", ")}.</p>
          ) : null}

          <div className="flex gap-4 items-center  m-2">
            <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
              3
            </p>
            <h3 className="font-bold text-lg">
              Selectionne les dates travaillées
            </h3>
          </div>
          <div className="w-full">
            <DayPicker
              className=" w-full"
              numberOfMonths={2}
              locale={fr}
              mode="multiple"
              min={1}
              selected={days}
              onSelect={setDays}
            />
          </div>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={resetDays}
          >
            Réinitialiser
          </button>
          {days && days.length > 0 ? (
            <p>Date(s) selectionnée(s) ➡️ {formattedDates.join(", ")}.</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
