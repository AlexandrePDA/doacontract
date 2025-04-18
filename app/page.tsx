/* eslint-disable react/no-unescaped-entities */
"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

import Contract from "@/components/Contract";
import { useState } from "react";
import { ClassNames, DayPicker } from "react-day-picker";
import namesData from "@/utils/datas.json";
import { fr } from "date-fns/locale";
import styles from "react-day-picker/dist/style.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [nameNurse1, setNameNurse1] = useState<string>("");

  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[] | undefined>(initialDays);
  const [periode, setPeriode] = useState<Date[] | undefined>(initialDays);

  const names = namesData;
  const nameNurse = [
    {
      name: "Isabelle BARRY, ADELI : 776148066",
    },
    {
      name: "Marion CADAUT, ADELI : 776235236",
    },
    {
      name: "Elodie BOURGALLE, ADELI : 776174070",
    },
  ];

  const handleNameChange = (selectedName: string) => {
    setName(selectedName);
  };

  const handleNameChangeNurse = (selectedName: string) => {
    setNameNurse1(selectedName);
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

  // formater date du jour pour contrat
  const dateToday = new Date();
  const monthsEx = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const day = dateToday.getDate();
  const month = monthsEx[dateToday.getMonth()];
  const year = dateToday.getFullYear();
  const formattedDateToday = `${day} ${month} ${year}`;

  const classNames: ClassNames = {
    ...styles,
    head: "custom-head",
  };

  return (
    <>
      <NavBar />
      <main className="flex   mx-auto flex-col items-center justify-between p-24">
        <div className="flex gap-4   w-full h-screen">
          <PDFViewer className=" w-1/2">
            <Contract
              name={name}
              date={formattedDates.join(", ")}
              periode={formattedPeriode.join(" au ")}
              now={formattedDateToday}
              nameNurse={nameNurse1}
            />
          </PDFViewer>

          <div className="w-1/2">
            <div className="flex gap-4 items-center  m-2">
              <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
                1
              </p>
              <h3 className="font-bold text-lg my-4">
                Sélectionne l'infirmiere à remplacer
              </h3>
            </div>
            <select
              className="m-4 border p-2 rounded-md"
              value={nameNurse1}
              onChange={(event) => handleNameChangeNurse(event.target.value)}
            >
              <option value="">Nom Prénom</option>
              {nameNurse.map((name, index) => (
                <option key={index} value={name.name}>
                  {name.name}
                </option>
              ))}
            </select>

            <div className="flex gap-4 items-center  m-2">
              <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
                2
              </p>
              <h3 className="font-bold text-lg my-4">
                Sélectionne l'infirmier-e remplaçant-e
              </h3>
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
                3
              </p>
              <h3 className="font-bold text-lg my-4">Sélectionne la période</h3>
              {periode && periode.length > 0 ? (
                <button className="" onClick={resetPeriode}>
                  ❌
                </button>
              ) : null}
            </div>
            <style>{`.custom-head { color: blue }`}</style>
            <DayPicker
              mode="multiple"
              max={2}
              selected={periode}
              locale={fr}
              onSelect={setPeriode}
              classNames={classNames}
              numberOfMonths={2}
            />

            {periode && periode.length > 0 ? (
              <p className="italic">
                Période selectionnée ➡️ {formattedPeriode.join(", ")}.
              </p>
            ) : null}

            <div className="flex gap-4 items-center m-2">
              <p className="bg-blue-500 text-lg text-white rounded-full p-4 w-8 h-8 flex items-center justify-center">
                4
              </p>
              <h3 className="font-bold text-lg my-4">
                Sélectionne les dates travaillées
              </h3>
              {days && days.length > 0 ? (
                <button onClick={resetDays}>❌</button>
              ) : null}
            </div>
            <div className="w-full">
              <style>{`.custom-head { color: blue }`}</style>
              <DayPicker
                className=" w-full"
                numberOfMonths={2}
                locale={fr}
                mode="multiple"
                min={1}
                selected={days}
                onSelect={setDays}
                classNames={classNames}
              />
            </div>

            {days && days.length > 0 ? (
              <p className="italic">
                {formattedDates.length} Date(s) selectionnée(s) ➡️{" "}
                {formattedDates.join(", ")}.
              </p>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
