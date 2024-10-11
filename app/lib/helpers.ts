import { Experience, Skill } from "./types";

export const parseUSDateStringToDate = (dateString: string) => {
  const [monthStr, yearStr] = dateString.split("/");
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);
  return new Date(year, month - 1);
};

export const formatDateToUSDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, "0")}/${year}`;
};

export const millisecondsToYears = (milliseconds: number): number => {
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = parseFloat((milliseconds / millisecondsPerYear).toFixed(1));
  return years;
};

export const alphaSort = (a: Skill, b: Skill) => (a > b ? 1 : -1);

export const timeSort = (
  a: Skill,
  b: Skill,
  timeBySkill: Record<Skill, number>,
) => (timeBySkill[a] < timeBySkill[b] ? 1 : -1);

export const calculateTimeBySkill = (
  experiences: Experience[],
  skillSet:
    | "frontEndSkills"
    | "backEndSkills"
    | "generalTechnicalSkills"
    | "softSkills",
) =>
  experiences.reduce(
    (acc, experience) => {
      const endTimestamp = experience.endDate
        ? experience.endDate.getTime()
        : Date.now();
      const years = millisecondsToYears(
        endTimestamp - experience.startDate.getTime(),
      );
      experience[skillSet].forEach((skill) => {
        if (!acc[skill]) {
          acc[skill] = 0;
        }
        acc[skill] += years;
      });
      return acc;
    },
    {} as Record<Skill, number>,
  );
